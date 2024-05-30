export default async function decorate(block) {
    block.innerHTML = `
    <form id="inquiry" >
    <label for="firstName"> firstName </label>
    <input type="text" name="firstName" id="firstName"  value="TE"/>
    <label for="lastName"> lastName </label>
    <input type="text" name="lastName"  value="KA"/>
    <label for="state"> Country Code </label>
    <select name="state" id="state">
        <option value="tokyo">TOKYO</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option>
        <option value="e">e</option>
    </select>
    <label for="mobile"> mobile </label>
    <input type="text" name="mobile" id="mobile"  value="0801234123"/>
    <label for="email"> email </label>
    <input type="text" name="email"  id="email" value="T2+test@betest.com"/>
    <input type="submit" value="OK">
    </form>
    <p>
    ACC Form v0.3
    `;

    const form = document.getElementById("inquiry");
    form.addEventListener("submit", async ev => {
        ev.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());    
        console.log(data); // {name: 'test', email: 'test@example.com', content: 'xxx'}
    
        try {
            // APIコール
            // https://demosystem5-mkt-prod12.campaign.adobe.com/cus/newLead.jssp
            // http://localhost:3333/text
            await window.fetch("https://demosystem5-mkt-prod12.campaign.adobe.com/cus/newLead.jssp", {
            //await window.fetch("http://localhost:3333/text", {
                method: "POST",
                body: JSON.stringify(data),
            });
    
            window.alert("Submitted..");
    
            // 完了時に入力値をクリア
            form.reset();
    
        } catch (e) {
            console.log(e);
        }
    });



}