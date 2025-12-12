function openAd() {
    let ad = window.open("", "", "width=350,height=300,scrollbars=yes");

    ad.document.write(`
        <div style="font-size:20px; padding:20px;">
            <h2>Super Sale!</h2>
            <p>Scroll down for more amazing offers...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>50% off on all products!</p>
            <p>Limited time offer...</p>
            <p>Don't miss it</p>
            <p>More text... More ads... More scrolling...</p>
            <p>Even more promotions... keep scrolling...</p>
        </div>
    `);
}
