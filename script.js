function wheelApp() {
    return {
      rotation: 0,
      spinning: false,
      fields: ['😊', '😝', '😍', '😎', '🍩', '🍭', '🍰', '🍬'],
      inputText: '', // bind textarea input
      maxFields: 12, // limit max fields
  
      spin() {
        console.log('spin');
        if (this.spinning) return;
        this.spinning = true;
        const min = 1024;
        const max = 9999;
        const newRotation = Math.floor(Math.random() * (max - min)) + min;
        this.rotation += newRotation;
        setTimeout(() => {
          this.spinning = false;
        }, 4000);
      },
  
      getSpanStyle(index) {
        const colors = ['#ff1f1f', '#19e3cf', '#9e0bf3', '#15b600', '#1f26ff', '#ff5a5a', '#57fff1', '#ff9612'];
        const color = colors[index % colors.length];
      
        // Setup clip-paths manually
        const clipPaths = [
          'polygon(0 92%, 100% 50%, 0 8%)',
          'polygon(100% 92%, 0 50%, 100% 8%)',
          'polygon(50% 0%, 8% 100%, 92% 100%)',
          'polygon(50% 100%, 92% 0, 8% 0)',
          'polygon(0 40%, 100% 0%, 60% 100%)',
          'polygon(40% 100%, 0 0%, 100% 40%)',
          'polygon(60% 0, 100% 100%, 0 60%)',
          'polygon(0 100%, 100% 60%, 40% 0)'
        ];
        const clipPath = clipPaths[index % clipPaths.length];
      
        // Setup positions manually
        const positions = [
          { top: '120px', left: '0' },
          { top: '120px', right: '0' },
          { bottom: '0', left: '120px' },
          { top: '0', left: '120px' },
          { bottom: '-2px', right: '242px' },
          { bottom: '-2px', left: '242px' },
          { top: '-2px', right: '242px' },
          { top: '-2px', left: '242px' }
        ];
        const pos = positions[index % positions.length];
      
        // Create a dynamic style string
        return `
          width: 50%;
          height: 50%;
          display: inline-block;
          position: absolute;
          clip-path: ${clipPath};
          background-color: ${color};
          ${pos.top ? `top: ${pos.top};` : ''}
          ${pos.bottom ? `bottom: ${pos.bottom};` : ''}
          ${pos.left ? `left: ${pos.left};` : ''}
          ${pos.right ? `right: ${pos.right};` : ''}
        `;
      },
  
      updateFields() {
        let lines = this.inputText.split('\\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);
  
        if (lines.length > this.maxFields) {
          lines = lines.slice(0, this.maxFields); // limit to max
          alert(`Max ${this.maxFields} items allowed! Extra lines were ignored.`);
        }
        this.fields = lines.length ? lines : ['😊', '😝', '😍', '😎', '🍩', '🍭', '🍰', '🍬']; // fallback if empty
      }
    }
  }