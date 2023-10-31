const funcs:Record<string, Function> ={



    verticalTotalBar(params: any) {
        var content = "";
        var val = 0;
        for (var i = 0; i < params.length; i++) {
          val += params[i].value;
          content += params[i].seriesName + ": " + val + "<br>";
        }
        return content;
      }
}

export default funcs;
