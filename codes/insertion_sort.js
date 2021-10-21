// import visualization libraries {
  const { Tracer, Array1DTracer, ChartTracer, LogTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');
  // }
  
  // define tracer variables {
  const chart = new ChartTracer();
  const tracer = new Array1DTracer();
  const logger = new LogTracer();
  Layout.setRoot(new VerticalLayout([chart, tracer, logger]));
  //const D = Randomize.Array1D({ N: 15 });
  const D = ([14,27,33,10,35]);
  tracer.set(D);
  tracer.chart(chart);
  Tracer.delay();
  // }
  
  // logger {
  logger.println(`orjinal dizi = [${D.join(', ')}]`);
  // }
  for (let i = 1; i < D.length; i++) {
    const eklenen = D[i];
    // visualize {
    logger.println(`eklenen : ${eklenen}`);
    tracer.select(i-1);
    Tracer.delay();
    // }
    let yer=i;
    


    while(yer>0 && D[yer-1]>eklenen){
        D[yer]=D[yer-1];
        
        
            // visualize {
      tracer.set(D);     
      tracer.patch(yer, D[yer]);
      Tracer.delay();
      tracer.depatch(yer);
      

      // }

        
        yer--;
         

    }
   
   D[yer]=eklenen;
   // visualize {
    tracer.set(D); 
    tracer.patch(yer, D[yer]);
    Tracer.delay();
    tracer.depatch(yer);
    tracer.deselect(i-1);
    // }
  
  }
  // logger {
  logger.println(`sıralı dizi = [${D.join(', ')}]`);
  // }
  
