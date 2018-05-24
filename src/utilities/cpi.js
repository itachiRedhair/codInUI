export const getCPI = (totalErrors, cyclomatic, maintainability) => {
    let cpiScore = 0;
    const max = Math.max(totalErrors, cyclomatic, maintainability);
      const Es = totalErrors * 100 / max;
      const Ms = (max - maintainability) * 100 / max;
      const Cs = cyclomatic * 100 / max;
      const We = 0.5;
      const Wm = 0.3;
      const Wc = 0.2;
      const weighted = We*Es+Wm*Ms+Wc*Cs;
      const AvgWtd = weighted/3;
      cpiScore = (100-AvgWtd).toFixed(1);
      return cpiScore;
} 