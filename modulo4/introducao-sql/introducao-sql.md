
# 1)
#### a)
id: é uma string, definida como VARCHAR(255) é uma PRIMARY KEY é o que define que a id deve ser única e todos os itens devem possuir uma.
name: é uma string e não pode ser Null
birth_date: é um formato de data que tbm é uma string
gender: é uma string com tamanho definido e não pode ser null

#### b)
Mostram respectivamente: O data base e as tabelas criadas

#### c)
Faz uma breve descrição dos types da Table em questão

# 2) 
#### a)
#### b)
O erro surge porque foi definido que o ID é uma Primary Key e não se pode ter 2 iguais.

# 3)
### a)
```SELECT * FROM Actor WHERE gender = "female"```

#### b) 
```SELECT salary FROM Actor WHERE name LIKE "Tony%"```
Não sei porque, mas só funcionou assim, o name diz que é uma constante, não entendi muito bem.

#### c)
O Resultado foi null, acho que simplesmente não existe. Ou como reparei a última linha quando se chama todos fica como null em uma chamada correta. A última linha quer dizer que é inválida!?

#### d)
```SELECT id, name, salary FROM Actor WHERE salary > 500000;```


#### e) 
Um erro de digitação, 'nome' não existe.

# 4)
#### a)
nome que contenha A como letra inicial ou J e que tenha salário maior que 300000

#### b)
```SELECT * from Actor WHERE name NOT LIKE "A%"  AND salary > 350000```

### c) 
```SELECT * from Actor WHERE name LIKE "%g%" OR name LIKE "%G%";```

### d) 
```SELECT * from Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;```

# 5)
### a)
```
CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
titulo VARCHAR (255) NOT NULL, 
sinopse TEXT NOT NULL, 
data_de_lancamento DATE NOT NULL,    
avaliacao INT NOT NULL);
```
id e titulo são string. sinopse texto, lançamento é data e avaliação é numero

#### b), c), d), e) :

```
INSERT INTO Movie (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
);
INSERT INTO Movie (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "002", 
  "Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);
INSERT INTO Movie (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8
);
INSERT INTO Movie (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "004", 
  "Tropa de Elite",
  "Tropa de Elite - Missão Dada é Missão Cumprida,[2][3] é um filme policial brasileiro de 2007, com o gênero drama/filme policial, dirigido por José Padilha, que também escreveu seu roteiro, com Braulio Mantovani e Rodrigo Pimentel, e produziu com Marcos Prado.",
  "2007/10/05", 
  10
);
```
# 6)
#### a)
```SELECT id, titulo, avaliacao FROM Movie WHERE id = "001";```

#### b)
```SELECT * FROM Movie WHERE titulo = "Tropa de Elite";```

#### c)
```SELECT id, titulo, sinopse FROM Movie WHERE avaliacao > 7;```

# 7)
#### a)
```SELECT * FROM Movie WHERE titulo LIKE "%vida%";```

#### b) 
```SELECT * FROM Movie WHERE titulo LIKE "%Flor%" OR sinopse LIKE "%vida%";```

#### c)
```SELECT * FROM Movie WHERE data_de_lancamento < "2022/04/04"```

#### d)
```SELECT * FROM Movie WHERE data_de_lancamento < curdate() AND (titulo LIKE "%a%" OR sinopse LIKE "%a%") AND avaliacao > 7;```
