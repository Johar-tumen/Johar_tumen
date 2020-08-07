import {membersBlock} from "./blocks";
import {IMG_PATH} from "../constants";

export default function Members(){
    const memberList = membersBlock.find("#members-list");

    const memberItem = (member) => (`
        <div class="card" style="width: 18rem;">
        <img src="${IMG_PATH}.${member.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${member.name}</p>
            </div>
        </div>
    `)

    const members = [
        {img: "mem1.jpg", name: "Василий Иванов"},
        {img: "mem2.jpg", name: "Иван Петров"},
        {img: "mem3.jpg", name: "Александр Сидоров"},
        {img: "mem4.jpg", name: "Моисей Зауфзильберштольц"},
        {img: "mem5.jpg", name: "Синь Зинь Пинь"}
    ];

    function renderMembers(){
        members.map((member) =>{
            const prepareMem = memberList.html + memberItem(member);
            memberList.html(prepareMem);
        })
    }
}