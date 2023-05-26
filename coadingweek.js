fetch('https://www.coursehubiitg.in/api/codingweek/contributions').
    then(res => {return res.json()})
    .then(data => {
        data.sort(CompareFunction);
        function CompareFunction(a, b){
            return a.points - b.points;
        }

        
        document.querySelector('.img1').src = data[8].avatar;
        document.querySelector('.name1').innerHTML = data[8].name + " &#183 " + data[8].points;

        document.querySelector('.name8').innerHTML = data[1].name; 
        document.querySelector('.img8').src = data[1].avatar;
         document.querySelector('.score8').innerHTML = data[1].points;

        document.querySelector('.name7').innerHTML = data[2].name;
        document.querySelector('.img7').src = data[2].avatar;
        document.querySelector('.score7').innerHTML = data[2].points;

        
        document.querySelector('.name6').innerHTML = data[3].name;
        document.querySelector('.img6').src = data[3].avatar;
        document.querySelector('.score6').innerHTML = data[3].points;


        document.querySelector('.name5').innerHTML = data[4].name;
        document.querySelector('.img5').src = data[4].avatar;
        document.querySelector('.score5').innerHTML = data[4].points;


        document.querySelector('.name4').innerHTML = data[5].name;
        document.querySelector('.img4').src = data[5].avatar;
        document.querySelector('.score4').innerHTML = data[5].points;

 
        document.querySelector('.name3').innerHTML = data[6].name + " &#183 " + data[6].points;
        document.querySelector('.img3').src = data[6].avatar;

        document.querySelector('.name2').innerHTML = data[7].name + " &#183 " + data[7].points;
         document.querySelector('.img2').src = data[7].avatar;
    
    })