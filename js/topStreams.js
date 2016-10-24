var params = {
  from: moment(),                          // the earliest date you'd like to include in the query
  to: moment(),                         // the latest date you'd like to include in the query
  limit: 5,                             // maximum number of results to return
  type: 'general',                        // analysis type for the data, can be 'general', 'unique', or 'average'
  unit: 'day',                            // level of granularity of the data, can be 'minute', 'hour', 'day', or 'month'
  'where': '("Android" in properties["Platforms"]) and (defined (properties["Platforms"]))'
}

MP.api.segment('Video Start', 'Movie Title', params).done(function(results){

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
  //set movie titles
  $('#android-table #movie-1').text(names[0])
  $('#android-table #movie-2').text(names[1])
  $('#android-table #movie-3').text(names[2])
  $('#android-table #movie-4').text(names[3])
  $('#android-table #movie-5').text(names[4])
  //set stream values
  $('#android-table #value-1').text(dataValues[0])
  $('#android-table #value-2').text(dataValues[1])
  $('#android-table #value-3').text(dataValues[2])
  $('#android-table #value-4').text(dataValues[3])
  $('#android-table #value-5').text(dataValues[4])


})
params.where = '("iOS" in properties["Platforms"]) and (defined (properties["Platforms"]))'
MP.api.segment('Video Start', 'Movie Title', params).done(function(results){

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
  //set movie titles
  $('#apple-table #movie-1').text(names[0])
  $('#apple-table #movie-2').text(names[1])
  $('#apple-table #movie-3').text(names[2])
  $('#apple-table #movie-4').text(names[3])
  $('#apple-table #movie-5').text(names[4])
  //set stream values
  $('#apple-table #value-1').text(dataValues[0])
  $('#apple-table #value-2').text(dataValues[1])
  $('#apple-table #value-3').text(dataValues[2])
  $('#apple-table #value-4').text(dataValues[3])
  $('#apple-table #value-5').text(dataValues[4])
})
params.where = '("Web" in properties["Platforms"]) and (defined (properties["Platforms"]))'
MP.api.segment('Video Start', 'Movie Title', params).done(function(results){

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
  //set movie titles
  $('#web-table #movie-1').text(names[0])
  $('#web-table #movie-2').text(names[1])
  $('#web-table #movie-3').text(names[2])
  $('#web-table #movie-4').text(names[3])
  $('#web-table #movie-5').text(names[4])
  //set stream values
  $('#web-table #value-1').text(dataValues[0])
  $('#web-table #value-2').text(dataValues[1])
  $('#web-table #value-3').text(dataValues[2])
  $('#web-table #value-4').text(dataValues[3])
  $('#web-table #value-5').text(dataValues[4])
})
params.where = '("Roku" in properties["Platforms"]) and (defined (properties["Platforms"]))'
MP.api.segment('Video Start', 'Movie Title', params).done(function(results){

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
  //set movie titles
  $('#roku-table #movie-1').text(names[0])
  $('#roku-table #movie-2').text(names[1])
  $('#roku-table #movie-3').text(names[2])
  $('#roku-table #movie-4').text(names[3])
  $('#roku-table #movie-5').text(names[4])
  //set stream values
  $('#roku-table #value-1').text(dataValues[0])
  $('#roku-table #value-2').text(dataValues[1])
  $('#roku-table #value-3').text(dataValues[2])
  $('#roku-table #value-4').text(dataValues[3])
  $('#roku-table #value-5').text(dataValues[4])
})
params.where = '("Apple TV" in properties["Platforms"]) and (defined (properties["Platforms"]))'
MP.api.segment('Video Start', 'Movie Title', params).done(function(results){

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
  //set movie titles
  $('#apple-tv-table #movie-1').text(names[0])
  $('#apple-tv-table #movie-2').text(names[1])
  $('#apple-tv-table #movie-3').text(names[2])
  $('#apple-tv-table #movie-4').text(names[3])
  $('#apple-tv-table #movie-5').text(names[4])
  //set stream values
  $('#apple-tv-table #value-1').text(dataValues[0])
  $('#apple-tv-table #value-2').text(dataValues[1])
  $('#apple-tv-table #value-3').text(dataValues[2])
  $('#apple-tv-table #value-4').text(dataValues[3])
  $('#apple-tv-table #value-5').text(dataValues[4])
})
