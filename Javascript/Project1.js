let BackgroundImages = [
    '../Images/pexels-davidmcbee-730547.jpg',
    '../Images/pexels-john-guccione-www-advergroup-com-1874301-3483098.jpg',
    '../Images/pexels-pixabay-534216.jpg',
    '../Images/BITCOIN-Ava.jpg',
    '../Images/pexels-davidmcbee-730547.jpg',
    '../Images/bitcoin2024021309194720240227115401.jpg',
    '../Images/69be42ec49e02993974b1043e1ece8b2.jpg'
];

let index = 0;
function arraImage(index){
    let Images = document.querySelector("#body");
        Images.style.backgroundImage = `url(${BackgroundImages[index]})`;
}
function  Right(){
    ++index;
    if(index >= BackgroundImages.length){
        index = 0;
    }
  arraImage(index);
}

let  Left = () => {
    --index;
    if(index < 0){
        index = BackgroundImages.length - 1;
    }
    arraImage(index);
}

setInterval(() => {
    Right();
},5000)
arraImage(index);



class Sacombank{  
    // Ngân hàng SACOMBANK 
    #pin; // các thuộc tính có dấu # :  khai báo nó bên ngoài constructor để trình thông dịch JavaScript biết rằng thuộc tính này tồn tại và là thuộc tính riêng tư.
    #AccountNumber;
    #present;
    // isCheck = false;
        constructor(){
            this.#AccountNumber = "hungsacombank"; // tài khoản pin mặc định 
            this.#pin = "hung123";
          // mk nhập từ bên ngoài 
            this.NameBank = "Sacombank";
            this.#present = 1000;     
        }
        // tạo ra class con 
        EnterAcount(){  // nhận số tài khoản nhập từ người dùng 
                 return this.#AccountNumber === this.information1;         
        }
        Check(){  // phần kiểm tra mã pin được bảo mật không cho truy cập tư bên ngoài 
            
            return this.#pin === this.Pin1;

        }
        // ------------------------------------HÀM RÚT TIỀN 
        withdrawmoney(value){  
           
            if(!this.Check() ){
             
                alert("Invalid passwork ! Please input again");
                            return;
        }
        if(!this.EnterAcount()){
            alert("invalid Acount Number ");
            return;
        }
             if(value > this.#present){
                alert("Tài khoản của bạn hiện tại không đủ ");
                return;
             }
                this.#present = this.#present - value;
           
                alert("Đã rút " + value + " VND.Số dư còn lại : "+this.#present);
        }  
        // -----------------------------------------------------------
        payin(value1){      // payin : đóng tiền  
            if(!this.Check()){ // kiểm tra mật khẩu 
                alert("Invalid passwork ! Please input again");
                            return;
            }
                  if(!this.EnterAcount()){
                         alert("invalid Acount Number ");
                                  return;
                            }
        this.#present += value1;

        alert("Đã nạp " +value1+ " VNĐ ");
    
        }
        CheckMoney(){
            Audios.play();// âm thanh thông báo 
            Swal.fire({
                    title: " Ngân Hàng SaComBank Thông Báo ",
                    text: "Số Tk : "+ this.#AccountNumber + "\n Số Dư Khả Dụng : "+this.#present+" VNĐ ",
                    icon: "success",
                    position:"top",
                    customClass:{
                    title:"titleAlert",
                    text:"paragraper"
                    }
             })
            
        }
}

    // -------------------------NGÂN HÀNG AGRIBANK---------------------------------------
    class Agribank extends Sacombank{ 
    #AcountAgribank;
    #PinAgribank;
    #presentAgribank;
            constructor(){
                super(); // khai báo super() để kế thừa lớp cha và sử dụng từ khóa this
                this.NameBank = "Agribank"; // các thuộc tính của đối tượng 
                this.#AcountAgribank = "hung123";
                this.#PinAgribank = "hung123";
                this.#presentAgribank = 0;       
            }
            EnterAcount(){  // nhận số tài khoản nhập từ người dùng 
                return this.#AcountAgribank === this.information1;   
                
                 } 
                 Check(){  // phần kiểm tra mã pin được bảo mật không cho truy cập tư bên ngoài 
                    console.log(this.#PinAgribank);
                    console.log(this.Pin1);
                    return this.#PinAgribank === this.Pin1;
                }
                withdrawmoney(value){         // hàm rút tiền 
                    if(!this.Check() ){
                     
                        alert("Invalid passwork ! Please input again");
                                    return;
                }    
                if(!this.EnterAcount()){
                    alert("invalid Acount Number ");
                    return;
                }
                     if(value > this.#presentAgribank){
                        alert("Tài khoản của bạn hiện tại không đủ ");
                        return;
                     }else{
                        this.#presentAgribank -= value;
                        alert("Đã rút " + value + " VND ");
                     }
                
                } 
                payin(value1){      // payin : đóng tiền  
                    if(!this.Check()){ // kiểm tra mật khẩu 
                        alert("Invalid passwork ! Please input again");
                                    return;
                    }
                          if(!this.EnterAcount()){
                                 alert("invalid Acount Number ");
                                          return;
                                    }
                this.#presentAgribank += value1;
                alert("Đã nạp " +value1+ " VND ");
        
                }
                CheckMoney(){
               
                        alert("Thông báo STK : "+this.#AcountAgribank+" \n AgriBank  Số dư khả Dụng : "+this.#presentAgribank);
 
        } 
}
// -----------------------------------------NGÂN HÀNG MBBANK
class MBBank extends Sacombank{
    #AcountMBbank;
    #PinMBbank;
    #presentMBbank;
    constructor(){
        super();
            this.#AcountMBbank = "hung123";
            this.#PinMBbank = "hung123";
            this.NameBank = "MbBank";
            this.#presentMBbank = 50.000;
    }
    Check(){  // phần kiểm tra mã pin được bảo mật không cho truy cập tư bên ngoài 
        return this.#PinMBbank === this.Pin1;
        // this là đối tượng mới tạo ngoài hàm  
    }

    EnterAcount(){  // phương thức 1 :  nhận số tài khoản nhập từ người dùng 
        return this.#AcountMBbank === this.information1; 
        
    }
 
    withdrawmoney(value){
        // console.log( this.#AcountMBbank);
        // console.log(this.information3);
        if(!this.EnterAcount()){
           
            alert("invalid Acount Number ");
            return;
        }   
     else if(!this.Check() ){  
            alert("Invalid passwork ! Please input again");
                        return;
                } 
         else if(value > this.#presentMBbank){
                alert("Tài khoản của bạn hiện tại không đủ ");
        return;
     }
     this.#presentMBbank = this.#presentMBbank - value;
     console.log(this.#presentMBbank);
     alert("Đã rút " + value + " VND . Số dư còn lại : "+this.#presentMBbank);

    }
    payin(value1){      // payin : đóng tiền  
        if(!this.Check()){ // kiểm tra mật khẩu 
            alert("Invalid passwork ! Please input again");
                        return;
        }
              if(!this.EnterAcount()){
                     alert("invalid Acount Number ");
                              return;
                        }
    this.#presentMBbank += value1;
    alert("Đã nạp " +value1+ " VND ");

    }
    CheckMoney(){
           Swal.fire({
                            title:`Thông báo số Tài khoản : ${this.#AcountMBbank} \n AgriBank  Số dư khả Dụng : + ${this.#presentMBbank}) `,
                            icon:"error",
                            timer: 5000,
                            timerProgressBar: true,
                            allowEscapeKey: true, /* cho phép đóng thông báo khi người dùng nhấp bên ngoài */
                             icon: "icon",
                             position: "top",
                            customClass:{
                                timerProgressBar: "progressBar",
                                title: "title",
        
                             }
                        })   
          alert("Thông báo STK : "+this.#AcountMBbank+" \n AgriBank  Số dư khả Dụng : "+this.#presentMBbank);

        }


}

   // -------------------------------------------------------------------------------

let NameBankBank = document.getElementById("listBank");
NameBankBank.setAttribute("class","informationBank");
let form_information = document.getElementById("information");
let withdrawmoney = document.getElementById("withdrawmoney");
let viewmoney = document.getElementById("viewmoney");

// ---------------------iconPassword----------------------


//----------------------icon sô tiền ---------------------------


//-----------------------icon Số tài khoản -----------
let iconBank = document.createElement("i");
iconBank.classList.add("fa","fa-building-columns");
//-----------------------------------

// ---------ICON MẬT KHẨU XEM TÀI KHOẢN -----------------------------------

let iconPasswordView = document.createElement("i");
    iconPasswordView.classList.add("fa-solid","fa-lock");
    form_information.appendChild(iconPasswordView);
    iconPasswordView.style.display = "none"

    // --------------ô nhập số STK------------------------
    let information = document.createElement("input");
    information.placeholder = "Nhập vào số tài khoản ";
    information.setAttribute("id","Accountstk");
    information.setAttribute("class","informationBank");
    form_information.appendChild(information);
        // phần bao quanh ô nhập số tài khoản  
    
    let wraperNumberAcount = document.createElement("span");
    wraperNumberAcount.setAttribute("class","wraperAccount");
    wraperNumberAcount.appendChild(iconBank);
    wraperNumberAcount.appendChild(information);
    form_information.appendChild(wraperNumberAcount);
    wraperNumberAcount.style.display = "none";
    //--------------STK--------------------------


    //-------------- Phần Mã pin----------------------

    let Pin = document.createElement("input");
    Pin.placeholder = "Nhập vào Mã pin ";
    Pin.type = "password";
    Pin.setAttribute("id","Pinstk");
    Pin.setAttribute("class","informationBank");
    form_information.appendChild(Pin);

    let iconPassword = document.createElement("i");
    iconPassword.classList.add("fa","fa-key");  
    

    let wraperPasswordAcount = document.createElement("span"); // phần Bao quanh icon và pin
    wraperPasswordAcount.setAttribute("class","wraperPassword");
    wraperPasswordAcount.appendChild(iconPassword);
    wraperPasswordAcount.appendChild(Pin);
    form_information.appendChild(wraperPasswordAcount);
    wraperPasswordAcount.style.display = "none";
   //-------------------------------------------------------------------
   
 // ---------------- Ô nhập số tiền muốn rút---------------------------

    let money = document.createElement("input");
    money.type = "number";
    money.setAttribute("id","money");
    money.setAttribute("class","informationBank");
    money.placeholder = "Nhập vào số tiền muốn rút";
  

    let iconMoney = document.createElement("i");
    iconMoney.classList.add("fa","fa-money-bill-transfer");
    

    let wraperMoney = document.createElement("span");
    wraperMoney.setAttribute("class","wraperMoney");
    wraperMoney.appendChild(money);
    wraperMoney.appendChild(iconMoney);
    form_information.appendChild(wraperMoney);
    wraperMoney.style.display = "none";

 //-----------------Ô nạp tiền vào thẻ------------------------------------
let addMoney1 = document.createElement("input");
addMoney1.setAttribute("id","addmoney");
addMoney1.setAttribute("class","informationBank");
addMoney1.placeholder = "Nhập vào số tiền muốn nạp";

let iconaddMoney = document.createElement("i");
iconaddMoney.classList.add("fa", "fa-money-check-dollar");

let wraperaddMoney = document.createElement("span");
    wraperaddMoney.setAttribute("class","wraperaddMoney");
    wraperaddMoney.appendChild(addMoney1);
    wraperaddMoney.appendChild(iconaddMoney);
    form_information.appendChild(wraperaddMoney);
    wraperaddMoney.style.display = "none";
//-------------------------------------------------------------------------

     //-----------------Nút ok Và cancel của rút tiền -------------------

     let Submit = document.createElement("button");
     Submit.textContent = "OK";
     Submit.setAttribute("id","submit");
     Submit.setAttribute("class","Cancel_Submit");
     form_information.appendChild(Submit);

 let Cancel = document.createElement("button"); // nút hủy rút tiền
 Cancel.textContent = "Cancel";
 Cancel.setAttribute("id","Cancel");
 Cancel.setAttribute("class","Cancel_Submit");
 form_information.appendChild(Cancel);

 //--------- phần bao quanh nút ok và cancel của rút tiền ------------

let wraper = document.createElement("span");
wraper.setAttribute("class","wraperSubmit_Cancel");
wraper.appendChild(Submit);
wraper.appendChild(Cancel);
form_information.appendChild(wraper);
wraper.style.display = "none";
//--------------------------------------------------------------
//------------NÚT HỦY BỎ VÀ OK ĐỂ NẠP TIỀN ----------------------------------
let Cancel1 = document.createElement("button");
Cancel1.setAttribute("id","Cancel1");
Cancel1.setAttribute("class","Cancel_Submit");
Cancel1.textContent  = "Cancel";
form_information.appendChild(Cancel1);


let submitadd = document.createElement("button"); //------------NÚT OK ĐỂ NAP TIỀN 
    submitadd.setAttribute("id","submitadd");
    submitadd.setAttribute("class","Cancel_Submit");
    submitadd.textContent = "OK";
    form_information.appendChild(submitadd);
//---------------------------------------------------

let Boxsubmit_Cancel = document.createElement("span");
    Boxsubmit_Cancel.setAttribute("class","Boxsubmit_Cancel");
   
    Boxsubmit_Cancel.appendChild(Cancel1);
    Boxsubmit_Cancel.appendChild(submitadd);
    form_information.appendChild(Boxsubmit_Cancel);
    Boxsubmit_Cancel.style.display = "none";
 

//----------------LẮNG NGHE SK TỪ NGƯỜI DÙNG----------------------------------------

    //-----------------------LẮNG NGHE NGƯỜI DÙNG NHẤN NÚT NẠP TIỀN --------------------
    let addMoney = document.getElementById("addMoney");
    addMoney.addEventListener("click",function(){
        wraperNumberAcount.style.display = "block"; 
        wraperPasswordAcount.style.display = "block"; 
        wraperaddMoney.style.display = "block";

        wraperMoney.style.display = "none"; // rút tiền sẽ ẩn 
        Boxsubmit_Cancel.style.display = "block";
        addMoney1.style.display = "block";
        Boxsubmit2_Cancel2.style.display = "none"; // nút cancel và ok của xem số dư sẽ ẩn đi 
        iconaddMoney.style.display = "block";
        wraper.style.display = "none";

            
   })
//------------------------------------------------------

//--------------------------lắng nghe người dùng nhấn nút rút tiền------ 
    withdrawmoney.addEventListener("click", () => { 
                   wraperNumberAcount.style.display = "block"; // số tk 
                   wraperPasswordAcount.style.display = "block";  
                   wraperMoney.style.display = "block";
                   wraperaddMoney.style.display = "none"; // ẩn ô để nạp tiền 
                   Boxsubmit_Cancel.style.display = "none"; // ẩn nút cancel và ok của nạp tiền
                    wraper.style.display = "block";
                    Boxsubmit2_Cancel2.style.display = "none"; // nút cancel và ok của xem số dư sẽ ẩn đi 
                    money.style.display = "block";
                    iconMoney.style.display = "block";

                             })

//---------------------------------------------------------------------
//--------------LẮNG NGHE NGƯỜI DÙNG NHẤN CANCEL ĐỂ HỦY BỎ NẠP TIỀN 
Cancel1.addEventListener("click",function(){
    wraperNumberAcount.style.display = "none"; 
    wraperPasswordAcount.style.display = "none"; 
    wraperaddMoney.style.display = "none";
    Boxsubmit_Cancel.style.display = "none";
})

//-------------- sự kiện hủy bỏ giao dịch rút tiền-------------------- 
    Cancel.addEventListener("click",function(){
        wraperNumberAcount.style.display = "none"; // số tk
        wraperPasswordAcount.style.display = "none";
        wraperMoney.style.display = "none";
        wraper.style.display = "none"; // ẩn nút OK và Cancel của phần rút tiền
    })
            // sử lý công việc khi người dùng nhấn ok 
            // biến Acount giúp nhận số tài khoản 
//


//-------------------------------------------------------
// --------------PHẦN BAO QUANH Ô NHẬP SỐ TK  VÀ ICON 



//---------------------------------------------------------------------
//-----------PHẦN BAO QUANH Ô NHẬP MẬT KHẨU VÀ ICON--------------------


// -----------------------SỰ KIỆN LẮNG NGHE NGƯỜI DÙNG 
 //XEM SỐ TIỀN DƯ TRONG TK ------------------------
 //-----------------nút hủy xem số dư trong tk ---------------
 let Cancel2 = document.createElement("button");
        Cancel2.setAttribute("id","Cancel2");
        Cancel2.setAttribute("class","Cancel_Submit");
        Cancel2.textContent = "Cancel";
    form_information.appendChild(Cancel2);

    //--------------NÚT OK ĐỂ XEM SỐ DƯ TRONG TÀI KHOẢN --------------------------------------
  
let Submit2 = document.createElement("button");
Submit2.setAttribute("d","Submit2");
Submit2.setAttribute("class","Cancel_Submit");
Submit2.textContent = "OK";
form_information.appendChild(Submit2);


//-------------------------------------------------------
let Boxsubmit2_Cancel2 = document.createElement("span");
    Boxsubmit2_Cancel2.setAttribute("class","Boxsubmit2_Cancel2");
    Boxsubmit2_Cancel2.appendChild(Cancel2);
    Boxsubmit2_Cancel2.appendChild(Submit2);
    form_information.appendChild(Boxsubmit2_Cancel2);
    Boxsubmit2_Cancel2.style.display = "none"; // mặc định ẩn khi chưa nhấn 
// ---------------------HÀM NHẬP TK MÃ PIN ĐỂ XEM SỐ DƯ -----
 viewmoney.onclick = function(){
    wraperNumberAcount.style.display = "block";
    wraperPasswordAcount.style.display = "block";    
    Boxsubmit2_Cancel2.style.display = "block";
    money.style.display = "none"; // Ẩn ô nhập số tiền muốn rút 
    wraper.style.display = "none"; // Ẩn nút cancel và ok của phần rút tiền 
    Boxsubmit_Cancel.style.display = "none";
    addMoney1.style.display = "none"; // ẩn ô để napj tiền vào thẻ
    iconaddMoney.style.display = "none";
    iconMoney.style.display = "none";
               
 }
 //----------- LẮNG NGHE NÚT CANCEL ĐỂ HỦY BỎ XEM TÀI KHOẢN -----------------------
Cancel2.onclick = function(){
    wraperNumberAcount.style.display = "none";
    wraperPasswordAcount.style.display = "none";    
    Boxsubmit2_Cancel2.style.display = "none";
}
//------------------------------------ Tạo ra các dối tượng ---------------------------------------------------------

let Audios = new Audio("../Audio/simple-notification-152054.mp3");
let AudiosError = new Audio("../Audio/system-notification-4-206493.mp3");
//-------------------------------------------------------------
let informationSacombank = new Sacombank(); // tạo ra đối tượng mới;
let informationAgribank = new Agribank();
let informationMBbank = new MBBank();

//----------------------------------------------------------------------------------------------------------------------
 //--------------LẮNG NGHE NGƯỜI DÙNG NHẤN OK ĐỂ XEM TÀI KHOẢN ----------------------------------


Submit2.onclick = () => {
    informationSacombank.Pin1 = Pin.value; // biến pin toàn cục
    informationSacombank.information1 = information.value;
// 1. --------------------------Ngân hàng Sacombank------------------------


if(/\w/.test(Pin.value) && /\w/.test(information.value)){

        if(informationSacombank.NameBank === NameBankBank.value){
            console.log(informationSacombank.Check() === false);
                if(informationSacombank.Check() === false){
                        AudiosError.play();
                        Swal.fire({
                            title:"Nhập sai mật khẩu. Vui lòng nhập lại",
                            icon:"error",
                            timer: 5000,
                            timerProgressBar: true,
                            allowEscapeKey: true, /* cho phép đóng thông báo khi người dùng nhấp bên ngoài */
                             icon: "icon",
                             position: "top",
                            customClass:{
                                timerProgressBar: "progressBar",
                                title: "title",
        
                             }
                        })                    
                }
                 else if(informationSacombank.EnterAcount() === false){
                    AudiosError.play();
                     Swal.fire({
                        title:"Nhập Sai Số Tài Khoản. Vui lòng nhập lại",
                        icon:"error",
                        timer: 5000, /* thời gian đóng thông báo */
                        timerProgressBar: true,/* thanh tiến trình */
                        allowEscapeKey: true,/* cho phép đóng thông báo khi người dùng nhấp bên ngoài */
                        position: "top",
                        customClass:{
                        timerProgressBar: "progressBar", 
                        title: "title",
                        icon: "icon"

                     }

                    })
                    
                }
                else{
                
                            informationSacombank.CheckMoney();
                 }

                          
        } 
//-----------------------------Ngân hàng Agribank---------------------------
        else  if(informationAgribank.NameBank === NameBankBank.value){
          
                  if(informationAgribank.EnterAcount()  === false){
                         Swal.fire({
                             title: "Nhập sai số tài khoản! Vui lòng nhập lại ",
                             icon: "error"
                            })
                       
                    }
                 else  if(informationAgribank.Check() === false){
                    Swal.fire({
                                    title: "Nhập sai Mã pin! Vui lòng nhập lại ",
                                 icon: "error"
                    })
                    
            }
                else{
                     informationAgribank.CheckMoney();
                 }   
        }
       
     //------------------------------Ngân hàng MBbank----------------------------
 else if(informationMBbank.NameBank === NameBankBank.value){
        

                    if(informationMBbank.EnterAcount() === false){
                         Swal.fire({
                             title: "Nhập sai số tài khoản! Vui lòng nhập lại ",
                                 icon: "error"
                        })
                         
                     }  
                    else if(informationMBbank.Check() === false){
            
                         Swal.fire({
                         title: "Nhập sai Mã pin! Vui lòng nhập lại ",
                        icon: "error"
                                })
                           
                            }
                        else{
                            informationMBbank.CheckMoney();
                         }
        }
        else{
            Swal.fire({
            title: "Bạn chưa Chọn tài khoản! vui lòng Chọn tài khoản ",
             icon: "info"
             })
                
        }   
    }
    else{
        Swal.fire({
            title: "Bạn chưa Nhập thông tin ! vui lòng Nhập thông tin ",
             icon: "info"
             })
    }
}       
//--------------------------------------------------------
 // --------sự kiện xử lý người dùng rút tiền--------------------
    Submit.addEventListener("click",() => {
        let BankName = NameBankBank.value;
 // nếu bỏ ngoài thì ô chọn tk ngân hàng sẽ k cập nhật 
          let value2 = parseFloat(money.value);             // biến value 2 giúp nhận giá trị tiền người dùng nhập vào
         
                         // biến Pin1 giúp nhân mã pin 
         
            if(informationSacombank.NameBank === BankName){
                informationSacombank.information1 = information.value;
                informationSacombank.Pin1 = Pin.value;
                if(money.value === ""){
                     alert("Bạn chưa nhập số tiền ");
                     return;
                }
                 informationSacombank.withdrawmoney(value2);

            }else if(informationAgribank.NameBank === BankName){
        
                  informationAgribank.Pin1 = Pin.value;
                  informationAgribank.information1= information.value; // thêm thuộc tính information1 bằng dấu chấm 
                    informationAgribank.withdrawmoney(value2);
            }
          
           else if(informationMBbank.NameBank === BankName){
       
                informationMBbank.Pin1 = Pin.value;
                informationMBbank.information1 = information.value;
                informationMBbank.withdrawmoney(value2);
        } 
        else{
            alert("Bạn chưa chọn ngân hàng");
        }           
    })
 // -------------sự kiện xủ lý người dùng nạp tiền ----------------



 submitadd.onclick = () =>{
    let moneyadd = parseFloat(addMoney1.value);
    if(informationSacombank.NameBank === NameBankBank.value){

            informationSacombank.Pin1 = Pin.value;
            informationSacombank.information1 = information.value;
            Audios.play().then();
            informationSacombank.payin(moneyadd);
    }
    else if(informationAgribank.NameBank === NameBankBank.value){
        informationAgribank.Pin1 =  Pin.value;
        informationAgribank.information1 = information.value;
        Audios.play();
        informationAgribank.payin(moneyadd);

    }
    else if(informationMBbank.NameBank === NameBankBank.value){
        informationMBbank.Pin1 =  Pin.value;
        informationMBbank.information1 = information.value;
        Audios.play();
        informationMBbank.payin(moneyadd);

    }
    else{
        alert(" Bạn chưa chọn ngân hàng ");
    }

}
 




 
 


   





