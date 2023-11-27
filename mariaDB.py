import pymysql

class MariaDB:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='wjtmdgus', password='12345', db='project')
        self.cur = self.db.cursor()
        print("connect ok")

    def addTempHum(self, temp, hum):
        sql = "insert into temphum(temperature, humidity) values('{0}', '{1}')".format(temp, hum)
        self.cur.execute(sql)
        self.db.commit()
        return [temp, hum]

    def selectTempHum(self):
        sql = "select * from temphum"
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result
    
    def selectMaxTemp(self):
        sql = "select max(id), temperature from temphum"
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result

    def selectMaxHum(self):
        sql = "select max(id), humidity from temphum"
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result
    

    def selectDust(self):
        sql = "select * from finedust"
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result

    def addDust(self, dust):
        sql = "insert into finedust(dust) values('{0}')".format(dust)
        self.cur.execute(sql)
        self.db.commit()
        return [dust]
    
    def selectMaxDust(self):
        sql = "select max(id), dust from finedust"
        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result