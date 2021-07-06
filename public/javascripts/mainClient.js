const cellResult = document.querySelector(".clientResult");
const divEl = (data) => {
    let list = [];
    for(el of data){
        const html = `<div>${el}</div>`;
        list.push(html);
    };
    cellResult.innerHTML = list;
};

const formEl = document.forms.setInfo;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/main', formData);
    divEl(data);
    //console.log('res:', data)
});