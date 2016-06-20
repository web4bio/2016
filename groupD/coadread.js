console.log('coadread.js loaded')

// initialize my stuff

cr={}

// start by listing types of cancer

cr.getTypesOfCancer=function(fun){
     cbio.getTypesOfCancer(function(x){
        cr.cancers=x
        x.map(function(ct,i){
            console.log(i,ct)
        })
        fun()
    })
}

cr.selectCancer=function(pt,pt2){
    if(pt2){pt2=pt2.toLowerCase()}
    pt=pt.toLowerCase()
    var sel=function(){
        var selCancer = cr.cancers.filter(function(cri){
            cri=cri.toLowerCase()
            return cri.match(pt)&&cri.match(pt2)
        })
        console.log(selCancer)
        4
    }
    if(!cr.cancers){
        cr.getTypesOfCancer(sel)
    }else{
        sel()
    }


}
/*

cbio.getHeight=function(fun){
  return cbio.get('getHeight',fun);
  if(typeof(coadread)=='')
}
*/

sand={}

sand.plot=function(){
  if(!sand.data){
    sand.loadData(sand.plot)
  }else{
    // cleaning the data
    sand.data.HEIGHT=sand.data.HEIGHT.map(function(h){
      //console.log(h)
      if(h==""){
        h=NaN
      }else{
        h=parseFloat(h)
      }
      return h
    })
    sand.data.OS_MONTHS=sand.data.OS_MONTHS.map(function(m){
      //console.log(h)
      if(m==""){
        m=NaN
      }else{
        m=parseFloat(m)
      }
      return m
    })

    var trace1 = {
      x: sand.data.OS_MONTHS,
      y: sand.data.HEIGHT,
      mode: 'markers',
      type: 'scatter'
    };


    var data = [trace1];
    var layout = {"width":605,"autosize":true,"height":450,"xaxis":{"range":[-9.859363867684477,157.68936386768448],"type":"linear","autorange":true,"showline":true,"title":"Overall Survival (months)"},"yaxis":{"range":[72.04490445859872,201.25509554140126],"type":"linear","autorange":true,"showline":true,"title":"Heights (cm)"}};


    Plotly.newPlot('plotLyGoesHere', data, layout);



    4
  }
  4
}

sand.loadData=function(fun){
  cbio.getClinicalData('coadread_tcga_all',function(x){
    sand.data=cbio.table(x)
    console.log('just loaded '+x.length+' rows')
    fun()
  })
}



// initialize

sand.plot()
