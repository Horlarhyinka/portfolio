export default ()=>{
    const hash = window.location.hash
    const section = document.getElementById(hash)
    section && section.scrollIntoView({behavior: "smooth"})
}