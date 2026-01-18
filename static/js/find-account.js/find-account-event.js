// const phoneNumInput = document.getElementById("phoneNumInput");
// const numButton = document.querySelector("ui-flex ui-items-center");

const phoneRegex = /^01([0|1|6|7|8|9]-?([0-9]{3,4})-?([0-9]{4}))$/;

phoneNumInput.addEventListener("input", (e) => {
    // console.log(e.target.value);
    // console.log(phoneRegex.test(e.target.value));
    if (phoneRegex.test(e.target.value)) {
        //버튼 활성화 + 색갈 변경
        numButton.disabled = true;
        numButton.classList.remove("ui-text-gray-500");

        console.log(numButton.disabled);
    } else {
        //버튼 비활성화 + 색갈 원래대로

        numButton.disabled = false;
        numButton.classList.add("ui-text-gray-500");

        console.log(numButton.disabled);
    }
});

//     phone.addEventListener("blur", (e) => {
//         if(phoneRegex.test(phone.value)){
//             phone.style.border = "1px solid blue";
//             return;
//         }
//         phone.style.border = "1px solid red";
//         phone.focus();
//     });

// phoneNumInput.addEventListener("input", (e) => {
//     console.log(e.target.value);
//     console.log(phoneRegex.test(e.target.value));
//     if (phoneRegex.test(e.target.value)) {
//         //버튼 활성화 + 색갈 변경
//         numButton.disabled = true;
//         numButton.classList.remove("ui-text-gray-500");
//         console.log("리무브");
//     } else {
//         //버튼 비활성화 + 색갈 원래대로

//         numButton.disabled = false;
//         numButton.classList.add("ui-text-gray-500");
//         console.log("에드");
//     }
// });
