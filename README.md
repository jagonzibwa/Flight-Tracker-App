
# Flight Tracker App

This is a simple flight tracking application that uses the [AviationStack API](https://aviationstack.com/) to fetch and display real-time flight information.


# Requirements

To run this app, make sure you have the following installed:

- Node.js (v18 or later)
- npm (comes with Node.js)
- Docker (only if deploying in containers)
- Internet connection to access the API


# How to Run the App Locally

# 1. Install Node.js

On Ubuntu:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

On macOS (with Homebrew):

```bash
brew install node
```

Verify Installation:

```bash
node -v
npm -v
```



# 2. Clone the Repository

```bash
git clone https://github.com/yourusername/Flight-Tracker-App.git
cd Flight-Tracker-App
```


# 3. Install Project Dependencies

```bash
npm install
```



# 4. Set Up Environment Variables

Create a `.env` file in the root directory:

```
API_KEY=your_aviationstack_api_key
```

Replace `your_aviationstack_api_key` with your actual API key from [AviationStack](https://aviationstack.com/).



# 5. Run the App

```bash
npm start
```



# 6. Open in Browser

Navigate to:

```
http://localhost:8000
```


# How to Deploy on a Server (Web01/Web02)

# 1. Install Node.js on the Server

```bash
sudo apt update
sudo apt install nodejs npm -y
```

---

# 2. Upload or Clone the Project

Option 1: Clone using Git

```bash
git clone https://github.com/yourusername/flight-tracker-app.git
cd flight-tracker-app



# 3. Install Dependencies

```bash
cd flight-tracker-app
npm install
```

# 4. Set Up Environment File

```bash
echo "API_KEY=your_aviationstack_api_key" > .env
```



# 5. Start the App

```bash
npm start
```

By default, the app runs on port 3000.



# 6. (Optional) Keep the App Running with PM2

Install PM2 globally:

```bash
npm install -g pm2
```

Start the app with PM2:

```bash
pm2 start npm --name flight-app -- start
pm2 save
```



# Acknowledgements

- This application uses the **[AviationStack API](https://aviationstack.com/)** for real-time flight data.
- Special thanks to the AviationStack team for providing a reliable, developer-friendly API.