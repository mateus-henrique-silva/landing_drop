const conjunction = [{ image: "./src/Assets/lb.png", text: "texto" }];
let teste = dom
conjunction.map((e)=>{
return(
    <div>
        <img src={e.image} />
    </div>
)
})