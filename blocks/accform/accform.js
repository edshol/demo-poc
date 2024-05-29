export default async function decorate(block) {
    block.innerHTML = `
    <h1> ACC form v2 </h1>
    <p>
    HELLO acc form　v２ with EDS
    <form method="POST" action="http://localhost:3333/text">
    <input type="text" name="edstext"/>
    <input type="submit" value="OK">
    </form>
    `;
}