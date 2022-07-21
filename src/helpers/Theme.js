const setTheme = (currentTheme) => {
  console.log(currentTheme);
  console.log(document.styleSheets);

  const selectedCssProps = Array.from(document.styleSheets).reduce(
    (prevStyleSheet, currStyleSheet) =>
      (prevStyleSheet = [
        ...prevStyleSheet,
        ...Array.from(currStyleSheet.cssRules).reduce(
          (prevCssRule, currCssRules) => {
            prevCssRule =
              currCssRules.selectorText === ':root'
                ? [
                    ...prevCssRule,
                    ...Array.from(currCssRules.style).filter((item) =>
                      item.startsWith('--selected')
                    )
                  ]
                : prevCssRule;
            return prevCssRule;
          },
          []
        )
      ]),
    []
  );

  selectedCssProps.forEach((value) => {
    document.documentElement.style.setProperty(
      value,
      `var(--${currentTheme}${value.substring(10)})`
    );
  });
};

export default setTheme;
