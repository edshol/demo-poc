export default async function decorate(block) {
    block.innerHTML = `
    <h1> ACC form v4 </h1>
    <p>
    HELLO acc form v4 with EDS
    <form id="inquiry" >
    <input type="text" name="edstext"/>
    <input type="submit" value="OK">
    </form>
    `;

    const form = document.getElementById("inquiry");
    form.addEventListener("submit", async ev => {
        ev.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());    
        console.log(data); // {name: 'test', email: 'test@example.com', content: 'xxx'}
    
        try {
            // APIコール
            await window.fetch("http://localhost:3333/text", {
                method: "POST",
                body: JSON.stringify(data),
            });
    
            window.alert("送信しました。");
    
            // 完了時に入力値をクリア
            form.reset();
    
        } catch (e) {
            console.log(e);
        }
    });



}