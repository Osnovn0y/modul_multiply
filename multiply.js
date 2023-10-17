/**
 * Multiply
 * autor F31
 * version
 */

;function Multiply(options){
    options = {
        elem: options.elem,
        count: options.count || 10,
        title: options.title || 'Table',
        captionAlign: options.captionAlign || 'center',
        captionColor: options.captionColor || '#000',
    }

    console.log(options);
    
    function init(){
        let content = `
        <table class="table-multiply">
        <caption style="text-align: ${options.captionAlign};
                        color: ${options.captionColor}">${options.title}
        </caption>
                            
       `
        for(let i = 0; i < options.count; i++){
            content+='<tr>'
            for (let j = 0; j < options.count; j++) {
                content += `<td>${i*j}</td>`
            }
            content+='</tr>'
        }

        content += '</table>';
        options.elem.innerHTML = content;
    }

    init();
};