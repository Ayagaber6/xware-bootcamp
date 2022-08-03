"use strict!";

const openModal1=document.querySelector('.show-modal1');
openModal1.addEventListener('click',function()
{
    const div = document.querySelector('.modal');
    div.classList.remove ('hidden');
    document.querySelector('.overlay').classList.remove("hidden");
})

const openModal2=document.querySelector('.show-modal2');
openModal2.addEventListener('click',function()
{
    const div = document.querySelector('.modal');
    div.classList.remove ('hidden');
    document.querySelector('.overlay').classList.remove("hidden");
})

const openModal3=document.querySelector('.show-modal3');
openModal3.addEventListener('click',function()
{
    const div = document.querySelector('.modal');
    div.classList.remove ('hidden');
    document.querySelector('.overlay').classList.remove("hidden");
})


const closeModal=document.querySelector('.close-modal');
closeModal.addEventListener('click',function()
{
    const div = document.querySelector('.modal');
    div.classList.add ('hidden');
    document.querySelector('.overlay').classList.add("hidden");
})
