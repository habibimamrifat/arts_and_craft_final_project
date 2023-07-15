document.getElementById('btn-continue').addEventListener('click',function(){
    viewHiddenSection('shop_detail')
});
document.getElementById('btn-shop').addEventListener('click',function(){
    viewHiddenSection('dash-shop')
});





document.getElementById('dash-shop').addEventListener('click',function(event){
   const set_shop = event.target.id;
   console.log(set_shop);
    const   shop_collector = document.getElementById('shop_collector')
    shop_collector.innerText = set_shop;
    console.log(shop_collector);

    closeViewedSection('dash-shop');
})

document.getElementById('btn-s-signup').addEventListener('click',function(){
    viewHiddenSection('code-match')
});

document.getElementById('btn-submit').addEventListener('click',function(){
    viewHiddenSection('dash-create-pass')
});


document.getElementById('final_confirm').addEventListener('click',function(){
    dataCollectorIsStudent('false');
})