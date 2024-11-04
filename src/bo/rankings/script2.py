import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation, PillowWriter
import numpy as np

# Lê o ficheiro CSV
df = pd.read_csv('bar_chart.csv')

# Lista de torneios para animar (os headers das colunas, exceto 'Players')
tournaments = df.columns[1:]

# Atribui cores diferentes a cada jogador usando a sintaxe atualizada para Matplotlib 3.7+
players = df['Players'].tolist()
colors = plt.colormaps['tab20'](np.linspace(0, 1, len(players)))

# Configura a figura do matplotlib
fig, ax = plt.subplots(figsize=(10, 6))

# Função para inicializar o gráfico
def init():
    ax.clear()
    ax.set_xlim(0, df[tournaments].values.max() * 1.1)  # Define o limite do eixo x
    ax.set_ylim(-0.5, 9.5)  # Limita o número de barras visíveis a 10
    ax.set_title('Ranking de Jogadores')
    ax.set_xlabel('Pontos')

# Função para atualizar o gráfico com a mudança suave das posições das barras
def update(frame):
    ax.clear()
    ax.set_title(f'Ranking após {tournaments[frame // 10]}')
    ax.set_xlabel('Pontos')

    # Frame atual (real, sem interpolação)
    current_frame = frame // 10

    # Obtém dados dos jogadores para o frame atual
    current_data = df[['Players', tournaments[current_frame]]].sort_values(by=tournaments[current_frame], ascending=False).head(10)

    # Ordena os jogadores por pontos atuais
    players_sorted = current_data['Players'].tolist()
    points_sorted = current_data[tournaments[current_frame]].values

    # Cria as barras com os valores instantâneos
    y_positions = np.arange(len(players_sorted))
    bars = ax.barh(y_positions, points_sorted, color=[colors[players.index(player)] for player in players_sorted], edgecolor='black', height=0.8)
    ax.set_xlim(0, df[tournaments].values.max() * 1.1)  # Atualiza o limite do eixo x com base no máximo atual

    # Atualiza os nomes dos jogadores no eixo y
    ax.set_yticks(y_positions)
    ax.set_yticklabels(players_sorted)

    # Reverte a ordem do eixo y para que o mais pontuado fique no topo
    ax.invert_yaxis()

    # Exibe os valores dos pontos nas barras
    for bar, value in zip(bars, points_sorted):
        ax.text(bar.get_width(), bar.get_y() + bar.get_height()/2, f'{int(value)}', va='center')

# Cria a animação
ani = FuncAnimation(fig, update, frames=len(tournaments) * 10, init_func=init, repeat=False, blit=False)

# Salva a animação como um GIF usando Pillow
ani.save('bar_chart_race.gif', writer=PillowWriter(fps=10))

print("GIF salvo como 'bar_chart_race.gif'")
