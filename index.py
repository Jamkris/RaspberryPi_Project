from flask import Flask, render_template, jsonify
import mariaDB

app = Flask(__name__)
DB = mariaDB.MariaDB()

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/get/temp")
def getTemp():
  result = DB.selectTempHum()
  return jsonify(result)

@app.route("/get/dust")
def getDust():
  result = DB.selectDust()
  return jsonify(result)

@app.route("/get/maxtemp")
def getMaxTemp():
  try:
    result = DB.selectMaxTemp()
    return jsonify(result)
  except:
    return "ERROR"

@app.route("/get/maxhum")
def getMaxHum():
  try:
    result = DB.selectMaxHum()
    return jsonify(result)
  except:
    return "ERROR"

@app.route("/get/maxdust")
def getMaxDust():
  try:
    result = DB.selectMaxDust()
    return jsonify(result)
  except:
    return "ERROR"


if __name__ == "__main__":
  app.run(host="0.0.0.0")