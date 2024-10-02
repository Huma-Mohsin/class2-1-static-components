//component microservice a website in to a modules.
//component is reusable.
// we can write html and css in component's TS and JS.
//we can write JS and TS in component's html element.
//first letter of each components name must be capital it helps to React understand a difference b/w a function and a component.
//component is a function.
//component returns an html parent element.
//component must be export or export default , it unables other modules to use it.


export default function Heading(){
    return(
    <h3><b>Welcome To Next.js </b></h3>
)
}