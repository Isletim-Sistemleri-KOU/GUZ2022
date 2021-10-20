// import visualization libraries {
    const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');
    // }
    
    // define tracer variables {
    const chart = new ChartTracer();
    const tracer = new Array1DTracer();
    const logger = new LogTracer();
    Layout.setRoot(new VerticalLayout([chart, tracer, logger]));
    const D = Randomize.Array1D({ N: 15 });
    tracer.set(D);
    tracer.chart(chart);
    Tracer.delay();
    // }
    
    // logger {
    logger.println(`orjinal dizi= [${D.join(', ')}]`);
    // }
    let N = D.length;
    let swapped;
    
    for (let i = 1; i < N; i++) {
      swapped = false;
    
      for (let j = 1; j < N; j++) {
        // visualize {
        tracer.select(j);
        Tracer.delay();
        // }
        if (D[j - 1] > D[j]) {
          // logger {
          logger.println(`değiştir ${D[j - 1]} ve ${D[j]}`);
          // }
          const temp = D[j - 1];
          D[j - 1] = D[j];
          D[j] = temp;
          swapped = true;
          // visualize {
          tracer.patch(j - 1, D[j - 1]);
          tracer.patch(j, D[j]);
          Tracer.delay();
          tracer.depatch(j - 1);
          tracer.depatch(j);
          // }
        }
        // visualize {
        tracer.deselect(j);
        // }
      }
      // visualize {
      tracer.deselect(N - 1);
      // }
    }
    // logger {
    logger.println(`sıralanmış dizi = [${D.join(', ')}]`);
    // }
    