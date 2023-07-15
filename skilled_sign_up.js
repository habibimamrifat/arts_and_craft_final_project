const test = document.getElementById('pin_match');
const m = test.style.backgroundImage="url(./img/box.jpg)";


document.getElementById('btn-hobby').addEventListener('click',function(){
    viewHiddenSection('dash-hobby')
});
document.getElementById('hobby-arrow').addEventListener('click',function(){
    closeViewedSection('dash-hobby')
})

document.getElementById('btn-s-signup').addEventListener('click',function(){
    viewHiddenSection('code-match')
})
document.getElementById('btn-submit').addEventListener('click',function(){
    viewHiddenSection('dash-create-pass')
})

document.getElementById('dash-hobby').addEventListener('click',function(event){
   const set_hobby = event.target.id;
   console.log(set_hobby);
    const   hobby_collector = document.getElementById('hobby_collector')
    hobby_collector.innerText = set_hobby;
    console.log(hobby_collector);

    closeViewedSection('dash-hobby');
})


document.getElementById('final_confirm').addEventListener('click',function(){
    dataCollectorIsStudent('true');
})