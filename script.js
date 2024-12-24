document.getElementById('threatForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const component = document.getElementById('component').value;
    const strideType = document.getElementById('strideType').value;
  
    const damage = parseInt(document.getElementById('damage').value, 10);
    const reproducibility = parseInt(document.getElementById('reproducibility').value, 10);
    const exploitability = parseInt(document.getElementById('exploitability').value, 10);
    const affectedUsers = parseInt(document.getElementById('affectedUsers').value, 10);
    const discoverability = parseInt(document.getElementById('discoverability').value, 10);
  
    const dreadScore = (damage + reproducibility + exploitability + affectedUsers + discoverability) / 5;
  
    const output = `
      Component: ${component} <br>
      Threat Type: ${strideType} <br>
      DREAD Score: ${dreadScore.toFixed(2)} <br>
      Risk Level: ${dreadScore >= 7 ? 'High' : dreadScore >= 4 ? 'Medium' : 'Low'}
    `;
  
    document.getElementById('output').innerHTML = output;
  });
  