let isSupported: null | boolean = null;
export const flexGapSupported = () => {
  if (typeof isSupported === 'boolean') {
    return isSupported;
  }

  if (typeof window === 'undefined') {
    isSupported = true;
  } else {
    isSupported = !((d, c: any = d.createElement('b').style, a = (c.gap = 0)) =>
      d.documentElement.classList.toggle('noflexgap', !c.gap))(document);
  }

  return isSupported;
};
