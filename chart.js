var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: data,
      type : 'pie',
      colors: {
        sleep: '#D81159',
        eat: '#8F2D56',
        code: '#218380',
        relax: '#FBB13C',
        other: '#726DA8',
        shoes: '#3053B8',
        music: '#FF5733'
      }
    },
    pie: {
        label: {
            format: function (value, ratio, id) {
                return value + ' hrs';
            }
        }
    }
});
   
   