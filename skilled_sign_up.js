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

document.getElementById('final_confirm').addEventListener('click',function(){
    dataCollectorIsStudent('true');
})