var params = {
  from: moment(),                          // the earliest date you'd like to include in the query
  to: moment(),                         // the latest date you'd like to include in the query
  limit: 5,                             // maximum number of results to return
  type: 'general',                        // analysis type for the data, can be 'general', 'unique', or 'average'
  unit: 'day',                            // level of granularity of the data, can be 'minute', 'hour', 'day', or 'month'
}

MP.api.segment('Search', 'Search Term', params).done(function(results){

  console.log('movie results', results.values());
  var data = results.values()

  var today = moment().format('YYYY-MM-DD')

  var names =[]
  var dataValues = []
  _.each(data, function(values, key){
    names.push(key)
    dataValues.push(values[today])
  })
  dataValues.sort(function(a,b){
    return b - a
  })
  $('#top-searches').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Top Searches'
      },
      yAxis: {
          title: {
              text: 'Number of Searches',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      xAxis: {
           categories: [names[0], names[1], names[2], names[3], names[4]],
           title: {
               text: null
           }
       },
      tooltip: {
          //valueSuffix: ' millions'
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      legend: {
        enabled: false,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 300,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Visits',
          data: dataValues
      }]
  });
})
