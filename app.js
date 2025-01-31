// Function to simulate fetching live status data
function fetchLiveStatus() {
  // Replace the following URL with your actual data endpoint
  const apiUrl = 'https://api.example.com/live-status';

  // Simulate fetching live status
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('liveStatus').innerText = `Current Status: ${data.status}`;
    })
    .catch(error => {
      console.error('Error fetching live status:', error);
      document.getElementById('liveStatus').innerText = 'Error fetching live status.';
    });
}

// Refresh the live status every minute
fetchLiveStatus();
setInterval(fetchLiveStatus, 60000);
