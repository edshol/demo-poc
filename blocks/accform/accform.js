export default async function decorate(block) {
    block.innerHTML = `
    <h1> ACC form v2 </h1>
    <p>
    hello acc form with EDS
    <form action="http://localhost:3333/text">
    <input type="text" name="edstext"/>
    <submit>
    </form>
    `;
}