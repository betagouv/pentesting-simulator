# Pentesting simulator

Cet outil permet de mettre en application des compétences de sécurité web pour les développeuses et développeurs.

## Installation
### Pré-requis
- Docker
- Docker compose
- node v>=14
- npm

### Commandes
- `git clone git@github.com:betagouv/pentesting-simulator.git`
- `cd pentesting-simulator`
- `npm install -C server/ && npm install -C client`
- `docker-compose up`

Dans un autre terminal, une fois la commande précédente terminée, lancer la commande suivante :

- `make migrate && make seed`

Ouvrez ensuite la page `http://localhost:3000`.

### Troubleshooting

```
> docker-compose up

Traceback (most recent call last):
  File "urllib3/connectionpool.py", line 670, in urlopen
  File "urllib3/connectionpool.py", line 392, in _make_request
  File "http/client.py", line 1255, in request
  File "http/client.py", line 1301, in _send_request
  File "http/client.py", line 1250, in endheaders
  File "http/client.py", line 1010, in _send_output
  File "http/client.py", line 950, in send
  File "docker/transport/unixconn.py", line 43, in connect
FileNotFoundError: [Errno 2] No such file or directory
```

-> Vous avez sans doute oublié de lancer Docker. 

---

```
> docker-compose up
Creating pentesting-simulator_db_1 ... error

ERROR: for pentesting-simulator_db_1  Cannot start service db: driver failed programming external connectivity on endpoint pentesting-simulator_db_1 (e233e8fc7e9d8faa84e49c0e92a9fbf793888690d7d4731171960f40bcad0579): Bind for 0.0.0.0:5432 failed: port is already allocated

ERROR: for db  Cannot start service db: driver failed programming external connectivity on endpoint pentesting-simulator_db_1 (e233e8fc7e9d8faa84e49c0e92a9fbf793888690d7d4731171960f40bcad0579): Bind for 0.0.0.0:5432 failed: port is already allocated
ERROR: Encountered errors while bringing up the project
```

-> Votre port 5432 est déjà alloué.
Lancez les commandes suivantes :
- `lsof -i :5432`
- `sudo lsof -i :5432`

pour savoir quel processus utilise votre port 5432. Vous 