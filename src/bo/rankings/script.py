import json


json_file = open('rankings.json',encoding="utf-8")
data = json.load(json_file)

players = data.keys()

tournaments = [
            "Bilatrecos",
            "Teamfight Tactics",
            "Futbiladas",
            "League of Legends 5x5",
            "Rocket League 3x3",
            "Sueca",
            "Scribbl.io",
            "Brawlhalla",
            "Bilabilhar",
            "CounterStrike 2",
            "Basquetiladas",
            "Overwatch 2",
            "AmongUs",
            "EscapeRoom",
            "Bilapredicts Europeu 2024",
            "Arenas LoL",
            "Ping Pong",
            "Volleyball",
            "Business Tour",
            "Circuito",
            "DeadByDaylight",
            "Minecraft Minigames",
            "Batalha Naval"
            ]


string_to_csv = f"Players"

for tournament in tournaments:
    string_to_csv+=f",{tournament}"

for player in players:
    player_points = 0
    participations = data[player]
    player_string = f"{player}"
    for tournament in tournaments:
        if(tournament in participations):
            player_points += participations[tournament]["Pontos"]
            if("Penalização" in participations[tournament]):
                player_points += participations[tournament]["Penalização"]
        player_string+=f",{player_points}"
    string_to_csv+="\n"+player_string

print(string_to_csv)

with open('bar_chart.csv', 'w+',encoding="utf-8") as out:
    out.write(string_to_csv)