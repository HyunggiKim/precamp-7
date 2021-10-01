
        function aaa(){
            // 기능 작성하기
            // alert("하이~~~")

            document.getElementById("bbb").innerText = "반갑습니다"
        }

        function counter(){
            const temp = Number(document.getElementById("count").innerText) + 1
            document.getElementById("count").innerText = temp 
        }

        function changeColor(){
            document.getElementById("ccc").setAttribute('style','background-color: red')
        }

        function setDisabled(){
            document.getElementById("ddd").setAttribute('disabled', 'true')
        }