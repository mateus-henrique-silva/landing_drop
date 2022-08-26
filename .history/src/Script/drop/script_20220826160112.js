const conjunction = [{ image: "./src/Assets/lb.png", text: "texto" }];
let teste = document.getElementById("teste").innerHTML;
conjunction.map((e)=>{
return(
    <div>
        <img src={e.image} />
    </div>
)
})