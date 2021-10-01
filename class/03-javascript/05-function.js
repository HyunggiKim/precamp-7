let mySwitch = false
const getToken = () => {
  if(mySwitch === false) {
      mySwitch = true
    const token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token
    
    let time = 180
        setInterval(() => {
            if(time >= 0) {
                const minutes = Math.floor(time / 60)
                const seconds = String(time % 60).padStart(2, "0")

                document.getElementById("timer").innerText = mintes + ":" + seconds
                time = time - 1
                if(time === 0)     document.getElementById("ddd").setAttribute('disabled', 'true')
            }
        }, 1000)
  }
}
