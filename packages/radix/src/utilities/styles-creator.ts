import { CSSObject } from 'styled-components';

type TypeName = 'variant' | 'size';
type SuperTypeName = 'variants';
type AttributeName = string;
type DefaultState = 'normal';
export type StateName =
  | DefaultState
  | 'invalid'
  | 'focus'
  | 'enabled'
  | 'disabled'
  | 'empty'
  | 'hover'
  | 'active'
  | 'valid'
  | 'visited';

// attribute consist of states
// simplified is equal to structured
type StructuredAttribute = {
  [stateName in StateName]?: CSSObject;
};

// type consist of attributes
export type SimplifiedType = {
  [attrName in AttributeName]?: StructuredAttribute;
};

export type SimplifiedTypeWithDefaultState = {
  [attrName in AttributeName]?: CSSObject;
};

// base consist of states
type SimplifiedBase = StructuredAttribute;

type StructuredType<AttributeNames extends string = AttributeName> = {
  [attrName in AttributeNames]?: {
    [componentName: string]: StructuredAttribute;
  };
};

type BaseBranch = Required<StructuredType<'base'>>;

type StructuredSuperType = {
  [type in TypeName]?: SimplifiedType;
};

type SuperTypeBranch = {
  [superType in SuperTypeName]?: StructuredSuperType;
};

type ComponentStylesRepresentation = {
  [superType in SuperTypeName]?: StructuredSuperType;
} & {
  base: {
    [componentName: string]: StructuredAttribute;
  };
};

type BaseBranchBuilder = <BaseParts>(componentName: string) => BaseBranch;
type StructuredSuperTypeBuilder = (componentName: string) => StructuredSuperType;
type EncloseAttrWithComponentName = (
  attrName: AttributeName,
  attrCSS: StructuredAttribute
) => StructuredType;

const encloseWithinDefaultState = (
  stateCSSObject: CSSObject,
  defaultState: DefaultState = 'normal'
) => ({
  [defaultState]: stateCSSObject,
});

const applyDefaultStateForAttr = (
  attrName: AttributeName,
  stateCSSObject: CSSObject
): SimplifiedType => ({
  [attrName]: encloseWithinDefaultState(stateCSSObject),
});

const toSimplifiedType = (
  acc: SimplifiedType,
  [attrName, stateCSSObject]: [AttributeName, CSSObject]
) => ({
  ...acc,
  ...applyDefaultStateForAttr(attrName, stateCSSObject),
});

const applyDefaultStateForAllAttr = (
  simplifiedType: SimplifiedTypeWithDefaultState
): SimplifiedType => Object.entries(simplifiedType).reduce(toSimplifiedType, {});

const withComponentName = (componentName: string): EncloseAttrWithComponentName => (
  attrName: AttributeName,
  attrCSS: StructuredAttribute
) => ({
  [attrName]: {
    [componentName]: attrCSS,
  },
});

const toStructuredType = (structureAttrObj: EncloseAttrWithComponentName) => (
  acc: StructuredType,
  [attrName, attrCSS]: [AttributeName, StructuredAttribute]
): StructuredType => ({
  ...acc,
  ...structureAttrObj(attrName, attrCSS),
});

const structureTypeCSSObject = (
  simplifiedType: SimplifiedType,
  structureAttrObj: EncloseAttrWithComponentName
): StructuredType => Object.entries(simplifiedType).reduce(toStructuredType(structureAttrObj), {});

const applyStructure = (structuredType: StructuredType, type: TypeName): StructuredSuperType => ({
  [type]: structuredType,
});

const applyCommonStyleToState = (
  stateName: StateName,
  stateStyle: CSSObject,
  commonStyles: CSSObject = {}
): StructuredAttribute => ({
  [stateName]: {
    ...commonStyles,
    ...stateStyle,
  },
});

const toStructuredAttrWithCommonStylesInEachState = (commonStyles?: CSSObject) => (
  statesWithCommonStyles: StructuredAttribute,
  [stateName, stateStyle]: [StateName, CSSObject]
): StructuredAttribute => ({
  ...statesWithCommonStyles,
  ...applyCommonStyleToState(stateName, stateStyle, commonStyles),
});

const applyCommonStylesToAllStatesInSingleAttr = (
  attrCSSObj: StructuredAttribute,
  commonStyles?: CSSObject
): StructuredAttribute =>
  Object.entries(attrCSSObj).reduce(toStructuredAttrWithCommonStylesInEachState(commonStyles), {});

const toCommonStylesInEachAttribute = (commonStyles?: CSSObject) => (
  acc: SimplifiedType,
  [attrName, attrCSSObj]: [string, StructuredAttribute]
) => ({ ...acc, [attrName]: applyCommonStylesToAllStatesInSingleAttr(attrCSSObj, commonStyles) });

const applyCommonStylesToAllStatesInAllAttr = (
  typeCSSObj: SimplifiedType,
  commonStyles?: CSSObject
): SimplifiedType =>
  Object.entries(typeCSSObj).reduce(toCommonStylesInEachAttribute(commonStyles), {});

const formComponentStyleWithDefaultState = (typeName: TypeName) => (
  simplifiedTypeCSSObject: SimplifiedTypeWithDefaultState,
  commonStyles?: CSSObject
): StructuredSuperTypeBuilder =>
  formComponentStyle(typeName)(applyDefaultStateForAllAttr(simplifiedTypeCSSObject), commonStyles);

const formComponentStyle = (typeName: TypeName) => (
  simplifiedTypeCSSObject: SimplifiedType,
  commonStyles?: CSSObject
): StructuredSuperTypeBuilder => (componentName: string): StructuredSuperType => {
  const sTCOWithCommonStylesApplied: SimplifiedType = applyCommonStylesToAllStatesInAllAttr(
    simplifiedTypeCSSObject,
    commonStyles
  );
  const structureAttrCSSObj = withComponentName(componentName);
  const structuredSuperTypeCSSObject: StructuredType = structureTypeCSSObject(
    sTCOWithCommonStylesApplied,
    structureAttrCSSObj
  );
  return applyStructure(structuredSuperTypeCSSObject, typeName);
};

export const withDefaultBase = (styles: CSSObject, commonStyles?: CSSObject): BaseBranchBuilder =>
  withBase(encloseWithinDefaultState(styles), commonStyles);

export const withBase = (
  simplifiedBaseCSSObject: SimplifiedBase,
  commonStyles?: CSSObject
): BaseBranchBuilder => (componentName: string): BaseBranch => {
  const sBCOWithCommonStylesApplied: SimplifiedBase = applyCommonStylesToAllStatesInSingleAttr(
    simplifiedBaseCSSObject,
    commonStyles
  );
  return {
    base: {
      [componentName]: sBCOWithCommonStylesApplied,
    },
  };
};

const structureSuperTypeBranch = (superType: SuperTypeName) => (
  cssTreeBuilders: Array<StructuredSuperTypeBuilder>,
  componentName: string
): SuperTypeBranch => ({
  [superType]: cssTreeBuilders.reduce(
    (
      acc: StructuredSuperType,
      cssTreeBuilder: StructuredSuperTypeBuilder
    ): StructuredSuperType => ({ ...acc, ...cssTreeBuilder(componentName) }),
    {}
  ),
});

export const stylesFor = (componentName: string) => (
  baseBuilder: BaseBranchBuilder,
  ...cssTreeBuilders: Array<StructuredSuperTypeBuilder>
): ComponentStylesRepresentation => ({
  ...baseBuilder(componentName),
  ...structureSuperTypeBranch('variants')(cssTreeBuilders, componentName),
});

export const withVariants = formComponentStyle('variant');
export const withSizes = formComponentStyle('size');
export const withDefaultVariants = formComponentStyleWithDefaultState('variant');
export const withDefaultSizes = formComponentStyleWithDefaultState('size');
export const withType = (type: string) => formComponentStyle(type as TypeName);
export const withDefaultType = (type: string) =>
  formComponentStyleWithDefaultState(type as TypeName);
