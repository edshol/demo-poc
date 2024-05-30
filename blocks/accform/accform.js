export default async function decorate(block) {
    block.innerHTML = `
    <h1> ACC form v0.1 </h1>
    <p>
    HELLO acc form v0.1 with EDS
    <form id="inquiry" >
    <input type="text" name="email"  value="T2+test@betest.com"/>
    <input type="text" name="mobile"  value="0801234123"/>
    <input type="text" name="firstName"  value="TE"/>
    <input type="text" name="lastName"  value="KA"/>
    <input type="text" name="state" value="TOKYO"/>
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