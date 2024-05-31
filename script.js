const leftDiv = document.getElementById('left');
        const rightDiv = document.getElementById('right');
        const minBtn = document.getElementById('min');
        const maxBtn = document.getElementById('max');
        const output = document.getElementById("output");

        function fullScreen() {
            leftDiv.style.display = "none";
            rightDiv.style.flexBasis = "100%";
            minBtn.style.display = "block";
            maxBtn.style.display = "none";
            output.style.height = "87vh";
        }

        function minimize() {
            leftDiv.style.display = "flex";
            rightDiv.style.flexBasis = "50%";
            minBtn.style.display = "none";
            maxBtn.style.display = "block";
        }

        function run() {
            const htmlCode = document.getElementById("html-code").value;
            const cssCode = document.getElementById("css-code").value;
            const jsCode = document.getElementById("js-code").value;
            const output = document.getElementById("output").contentWindow.document;



            output.open();

            output.write(`${htmlCode}<style>${cssCode}</style><script>${jsCode}<\/script>`);

            output.close();
        }

        window.onbeforeunload = function () {
            return "Are you sure you want to refresh?";
        };

        //Save Button
        document.getElementById('files').addEventListener('submit', function (event) {
            event.preventDefault();

            saveFile('index.html', document.getElementById('html-code').value);
            saveFile('style.css', document.getElementById('css-code').value);
            saveFile('script.js', document.getElementById('js-code').value);

            function saveFile(filename, content) {
                const blob = new Blob([content], { type: 'text/plain' });
                const anchor = document.createElement('a');

                anchor.href = URL.createObjectURL(blob);
                anchor.download = filename;
                anchor.click();

                URL.revokeObjectURL(anchor.href);
            }
        });