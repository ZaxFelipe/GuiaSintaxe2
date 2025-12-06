// Dados de conteúdo para cada linguagem
const languageData = {
    javascript: {
        name: 'JavaScript',
        topics: {
            variaveis: {
                title: 'Variáveis',
                subtitle: 'JavaScript',
                description: 'JavaScript oferece var, let e const para declaração de variáveis.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**let**: Escopo de bloco, pode ser reatribuído.',
                        '**const**: Escopo de bloco, não pode ser reatribuído.',
                        '**var**: Escopo de função, pode causar problemas de hoisting.'
                    ]
                },
                examples: [
                    {
                        code: `let nome = "João";
const idade = 25;
var cidade = "São Paulo";`
                    }
                ]
            },
            funcoes: {
                title: 'Funções',
                subtitle: 'JavaScript',
                description: 'Suporta a sintaxe \'function\' e as concisas arrow functions \'⇒\'.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Arrow Functions**: São ideais para funções anônimas ou callbacks, com sintaxe mais curta.',
                        '**Hoisting**: Funções declaradas com \'function\' são movidas para o topo do escopo, podendo ser chamadas antes de serem definidas.',
                        '**Usos Comuns**: Organizar código, criar lógica reutilizável, manipular eventos.'
                    ]
                },
                examples: [
                    {
                        code: `function somar(a, b) {
    return a + b;
}

const subtrair = (a, b) => a - b;`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'JavaScript',
                description: 'Estruturas if/else e switch para controle de fluxo.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**if/else**: Usado para executar código baseado em condições.',
                        '**switch**: Ideal para múltiplas condições com o mesmo valor.',
                        '**Operador ternário**: Forma concisa de if/else: `condicao ? true : false`'
                    ]
                },
                examples: [
                    {
                        code: `if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

const resultado = idade >= 18 ? "Adulto" : "Jovem";`
                    }
                ]
            },
            lacos: {
                title: 'Laços de Repetição',
                subtitle: 'JavaScript',
                description: 'for, while, forEach e outros métodos de iteração.',
                examples: [
                    {
                        code: `for (let i = 0; i < 5; i++) {
    console.log(i);
}

const array = [1, 2, 3];
array.forEach(item => console.log(item));`
                    }
                ]
            },
            strings: {
                title: 'Strings',
                subtitle: 'JavaScript',
                description: 'Manipulação de texto com template literals e métodos úteis.',
                examples: [
                    {
                        code: `const nome = "Maria";
const saudacao = \`Olá, \${nome}!\`;

const texto = "JavaScript";
console.log(texto.toUpperCase()); // JAVASCRIPT
console.log(texto.length); // 10`
                    }
                ]
            },
            arrays: {
                title: 'Arrays',
                subtitle: 'JavaScript',
                description: 'Estruturas de dados para armazenar listas de elementos.',
                examples: [
                    {
                        code: `const frutas = ["maçã", "banana", "laranja"];

frutas.push("uva"); // Adiciona ao final
frutas.pop(); // Remove do final
frutas.map(f => f.toUpperCase());
frutas.filter(f => f.length > 5);`
                    }
                ]
            },
            objetos: {
                title: 'Objetos',
                subtitle: 'JavaScript',
                description: 'Estruturas chave-valor para organizar dados relacionados.',
                examples: [
                    {
                        code: `const pessoa = {
    nome: "João",
    idade: 30,
    saudar() {
        return \`Olá, meu nome é \${this.nome}\`;
    }
};

console.log(pessoa.nome); // João
console.log(pessoa.saudar());`
                    }
                ]
            }
        }
    },
    csharp: {
        name: 'C#',
        topics: {
            variaveis: {
                title: 'Variáveis',
                subtitle: 'C#',
                description: 'C# é uma linguagem fortemente tipada com tipos de valor e referência.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Tipos de valor**: int, double, bool, struct - armazenados na stack.',
                        '**Tipos de referência**: string, class, array - armazenados na heap.',
                        '**var**: Inferência de tipo em tempo de compilação.'
                    ]
                },
                examples: [
                    {
                        code: `int idade = 25;
string nome = "João";
var automatico = 10.5; // double
const double PI = 3.14159;`
                    }
                ]
            },
            funcoes: {
                title: 'Métodos',
                subtitle: 'C#',
                description: 'Métodos com tipos de retorno explícitos e modificadores de acesso.',
                examples: [
                    {
                        code: `public int Somar(int a, int b)
{
    return a + b;
}

public void ExibirMensagem(string msg)
{
    Console.WriteLine(msg);
}

// Expressão lambda
Func<int, int, int> multiplicar = (a, b) => a * b;`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'C#',
                description: 'Estruturas de controle de fluxo com verificação de tipos.',
                examples: [
                    {
                        code: `if (idade >= 18)
{
    Console.WriteLine("Maior de idade");
}
else
{
    Console.WriteLine("Menor de idade");
}

switch (diaSemana)
{
    case 1:
        Console.WriteLine("Segunda");
        break;
    default:
        Console.WriteLine("Outro dia");
        break;
}`
                    }
                ]
            },
            lacos: {
                title: 'Laços de Repetição',
                subtitle: 'C#',
                description: 'Diversos tipos de loops para iteração.',
                examples: [
                    {
                        code: `for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

foreach (var item in lista)
{
    Console.WriteLine(item);
}

while (condicao)
{
    // código
}`
                    }
                ]
            },
            arrays: {
                title: 'Arrays e Listas',
                subtitle: 'C#',
                description: 'Coleções tipadas para armazenar dados.',
                examples: [
                    {
                        code: `int[] numeros = { 1, 2, 3, 4, 5 };
string[] nomes = new string[3];

List<int> lista = new List<int>();
lista.Add(10);
lista.Remove(10);

var resultado = lista.Where(x => x > 5).ToList();`
                    }
                ]
            },
            classes: {
                title: 'Classes e Objetos',
                subtitle: 'C#',
                description: 'Programação orientada a objetos com encapsulamento.',
                examples: [
                    {
                        code: `public class Pessoa
{
    public string Nome { get; set; }
    public int Idade { get; private set; }

    public Pessoa(string nome, int idade)
    {
        Nome = nome;
        Idade = idade;
    }

    public void Apresentar()
    {
        Console.WriteLine($"Olá, sou {Nome}");
    }
}`
                    }
                ]
            }
        }
    },
    cpp: {
        name: 'C++',
        topics: {
            variaveis: {
                title: 'Variáveis',
                subtitle: 'C++',
                description: 'C++ oferece controle direto de memória e tipos primitivos.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Tipos primitivos**: int, float, double, char, bool.',
                        '**Ponteiros**: Acesso direto à memória com * e &.',
                        '**const**: Declara valores constantes que não podem ser modificados.'
                    ]
                },
                examples: [
                    {
                        code: `int idade = 25;
double altura = 1.75;
char inicial = 'J';
bool ativo = true;

int* ponteiro = &idade;
const double PI = 3.14159;`
                    }
                ]
            },
            funcoes: {
                title: 'Funções',
                subtitle: 'C++',
                description: 'Funções com tipos de retorno e sobrecarga.',
                examples: [
                    {
                        code: `int somar(int a, int b) {
    return a + b;
}

double somar(double a, double b) {
    return a + b;
}

void exibirMensagem(string msg) {
    cout << msg << endl;
}

// Função lambda (C++11)
auto multiplicar = [](int a, int b) { return a * b; };`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'C++',
                description: 'Estruturas de controle de fluxo.',
                examples: [
                    {
                        code: `if (idade >= 18) {
    cout << "Maior de idade" << endl;
} else {
    cout << "Menor de idade" << endl;
}

switch (opcao) {
    case 1:
        cout << "Opção 1" << endl;
        break;
    default:
        cout << "Opção inválida" << endl;
}`
                    }
                ]
            },
            lacos: {
                title: 'Laços de Repetição',
                subtitle: 'C++',
                description: 'Loops for, while e do-while.',
                examples: [
                    {
                        code: `for (int i = 0; i < 5; i++) {
    cout << i << endl;
}

vector<int> numeros = {1, 2, 3, 4, 5};
for (const auto& num : numeros) {
    cout << num << endl;
}

while (condicao) {
    // código
}`
                    }
                ]
            },
            arrays: {
                title: 'Arrays e Vetores',
                subtitle: 'C++',
                description: 'Arrays estáticos e vetores dinâmicos.',
                examples: [
                    {
                        code: `int numeros[5] = {1, 2, 3, 4, 5};

vector<int> vetor;
vetor.push_back(10);
vetor.pop_back();

for (int i = 0; i < vetor.size(); i++) {
    cout << vetor[i] << endl;
}`
                    }
                ]
            },
            classes: {
                title: 'Classes e Objetos',
                subtitle: 'C++',
                description: 'Programação orientada a objetos com controle de memória.',
                examples: [
                    {
                        code: `class Pessoa {
private:
    string nome;
    int idade;

public:
    Pessoa(string n, int i) : nome(n), idade(i) {}
    
    void apresentar() {
        cout << "Olá, sou " << nome << endl;
    }
    
    string getNome() { return nome; }
};`
                    }
                ]
            }
        }
    },
    python: {
        name: 'Python',
        topics: {
            variaveis: {
                title: 'Variáveis',
                subtitle: 'Python',
                description: 'Python é dinamicamente tipado e não requer declaração de tipo.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Tipagem dinâmica**: Não é necessário declarar o tipo da variável.',
                        '**Snake_case**: Convenção de nomenclatura padrão.',
                        '**Type hints**: Opcionais, mas úteis para documentação (Python 3.5+).'
                    ]
                },
                examples: [
                    {
                        code: `nome = "João"
idade = 25
altura = 1.75
ativo = True

# Type hints (opcional)
nome: str = "Maria"
idade: int = 30`
                    }
                ]
            },
            funcoes: {
                title: 'Funções',
                subtitle: 'Python',
                description: 'Funções definidas com def e funções lambda.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**def**: Palavra-chave para definir funções.',
                        '**lambda**: Funções anônimas de uma linha.',
                        '**Args e kwargs**: Argumentos variáveis (*args) e nomeados (**kwargs).'
                    ]
                },
                examples: [
                    {
                        code: `def somar(a, b):
    return a + b

def saudar(nome="Visitante"):
    return f"Olá, {nome}!"

# Lambda
subtrair = lambda a, b: a - b

# Args variáveis
def soma_todos(*numeros):
    return sum(numeros)`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'Python',
                description: 'Estruturas if/elif/else com indentação.',
                examples: [
                    {
                        code: `if idade >= 18:
    print("Maior de idade")
elif idade >= 13:
    print("Adolescente")
else:
    print("Criança")

# Operador ternário
resultado = "Adulto" if idade >= 18 else "Jovem"`
                    }
                ]
            },
            lacos: {
                title: 'Laços de Repetição',
                subtitle: 'Python',
                description: 'Loops for e while com sintaxe simplificada.',
                examples: [
                    {
                        code: `for i in range(5):
    print(i)

frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)

# List comprehension
quadrados = [x**2 for x in range(10)]

while condicao:
    # código
    pass`
                    }
                ]
            },
            listas: {
                title: 'Listas',
                subtitle: 'Python',
                description: 'Estruturas de dados dinâmicas e versáteis.',
                examples: [
                    {
                        code: `numeros = [1, 2, 3, 4, 5]
numeros.append(6)
numeros.remove(3)

# Slicing
primeiros_tres = numeros[:3]
ultimos_dois = numeros[-2:]

# List comprehension
pares = [x for x in numeros if x % 2 == 0]`
                    }
                ]
            },
            dicionarios: {
                title: 'Dicionários',
                subtitle: 'Python',
                description: 'Estruturas chave-valor mutáveis.',
                examples: [
                    {
                        code: `pessoa = {
    "nome": "João",
    "idade": 30,
    "cidade": "São Paulo"
}

print(pessoa["nome"])
pessoa["profissao"] = "Programador"

# Iterar
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")`
                    }
                ]
            },
            classes: {
                title: 'Classes',
                subtitle: 'Python',
                description: 'Programação orientada a objetos com sintaxe simples.',
                examples: [
                    {
                        code: `class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def apresentar(self):
        return f"Olá, sou {self.nome}"
    
    def __str__(self):
        return f"Pessoa: {self.nome}, {self.idade} anos"

joao = Pessoa("João", 25)
print(joao.apresentar())`
                    }
                ]
            }
        }
    },
    gml: {
        name: 'GML',
        topics: {
            inicio: {
                title: 'Introdução ao GML',
                subtitle: 'GameMaker Language',
                description: 'GML (GameMaker Language) é a linguagem de script do GameMaker Studio, projetada para desenvolvimento de jogos 2D.',
                info: {
                    title: 'Conceitos Fundamentais',
                    items: [
                        '**Objects**: Entidades que contêm lógica e comportamento.',
                        '**Sprites**: Imagens ou animações usadas pelos objects.',
                        '**Rooms**: Cenas/níveis onde objects são colocados.',
                        '**Events**: Gatilhos que executam código (Create, Step, Draw, etc).'
                    ]
                },
                examples: [
                    {
                        code: `// Estrutura básica de eventos

// CREATE EVENT - Executa uma vez quando o objeto é criado
speed = 5;
health = 100;
can_jump = true;

// STEP EVENT - Executa a cada frame (60x por segundo)
if (keyboard_check(vk_right)) {
    x += speed;
}

// DRAW EVENT - Renderiza gráficos
draw_self();  // Desenha o sprite do objeto
draw_text(x, y - 20, "HP: " + string(health));

// Comentários
// Comentário de uma linha
/* Comentário
   de múltiplas linhas */`
                    }
                ]
            },
            variaveis: {
                title: 'Variáveis',
                subtitle: 'GameMaker Language',
                description: 'Variáveis em GML podem ter diferentes escopos e tipos.',
                info: {
                    title: 'Tipos de Variáveis',
                    items: [
                        '**Instance Variables**: Pertencem a uma instância específica.',
                        '**Local Variables**: Existem apenas no evento atual (var).',
                        '**Global Variables**: Acessíveis de qualquer lugar.',
                        '**Built-in Variables**: x, y, speed, direction, sprite_index, etc.'
                    ]
                },
                examples: [
                    {
                        code: `// Variáveis de instância (CREATE EVENT)
health = 100;
max_health = 100;
player_name = "Hero";
is_alive = true;

// Variáveis locais (só existem no evento)
var temp_value = 50;
var damage = 10;
health -= damage;

// Variáveis globais (acessíveis em qualquer lugar)
global.score = 0;
global.high_score = 1000;
global.game_paused = false;

// Variáveis built-in importantes
x = 100;              // Posição horizontal
y = 200;              // Posição vertical
speed = 5;            // Velocidade de movimento
direction = 90;       // Direção em graus (90 = cima)
sprite_index = spr_player;  // Sprite atual
image_index = 0;      // Frame atual da animação
image_speed = 1;      // Velocidade da animação
visible = true;       // Se o objeto é visível
depth = 0;            // Profundidade de renderização`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'GameMaker Language',
                description: 'Estruturas de controle para tomada de decisões.',
                examples: [
                    {
                        code: `// If simples
if (health <= 0) {
    instance_destroy();
}

// If-else
if (health > 50) {
    sprite_index = spr_player_healthy;
} else {
    sprite_index = spr_player_hurt;
}

// If-else if-else
if (health > 75) {
    status = "Saudável";
} else if (health > 25) {
    status = "Ferido";
} else if (health > 0) {
    status = "Crítico";
} else {
    status = "Morto";
}

// Switch
switch (weapon_type) {
    case 0:
        weapon_name = "Espada";
        damage = 10;
        break;
    case 1:
        weapon_name = "Arco";
        damage = 7;
        break;
    case 2:
        weapon_name = "Magia";
        damage = 15;
        break;
    default:
        weapon_name = "Punho";
        damage = 3;
}

// Operador ternário
var msg = (is_alive) ? "Vivo" : "Morto";`
                    }
                ]
            },
            loops: {
                title: 'Loops',
                subtitle: 'GameMaker Language',
                description: 'Estruturas de repetição para iterar sobre dados.',
                examples: [
                    {
                        code: `// For loop
for (var i = 0; i < 10; i++) {
    instance_create_layer(x + (i * 32), y, "Instances", obj_bullet);
}

// While loop
var count = 0;
while (count < 5) {
    show_debug_message("Count: " + string(count));
    count++;
}

// Do-until (executa pelo menos uma vez)
var tries = 0;
do {
    var spawn_x = random(room_width);
    var spawn_y = random(room_height);
    tries++;
} until (!place_meeting(spawn_x, spawn_y, obj_solid) || tries > 100);

// Repeat (repete N vezes)
repeat (5) {
    instance_create_layer(x, y, "Instances", obj_particle);
}

// With (executa código em outras instâncias)
with (obj_enemy) {
    health -= 10;  // Dano em todos os inimigos
}

// Break e Continue
for (var i = 0; i < 100; i++) {
    if (i == 50) break;     // Sai do loop
    if (i mod 2 == 0) continue;  // Pula pares
    show_debug_message(i);
}`
                    }
                ]
            },
            funcoes: {
                title: 'Funções',
                subtitle: 'GameMaker Language',
                description: 'Criar funções customizadas para organizar código.',
                examples: [
                    {
                        code: `// Função simples
function say_hello() {
    show_debug_message("Hello World!");
}

// Função com parâmetros
function deal_damage(_target, _amount) {
    with (_target) {
        health -= _amount;
        if (health <= 0) {
            instance_destroy();
        }
    }
}

// Função com retorno
function calculate_distance(_x1, _y1, _x2, _y2) {
    var dx = _x2 - _x1;
    var dy = _y2 - _y1;
    return sqrt(dx * dx + dy * dy);
}

// Função com valor padrão
function spawn_enemy(_x, _y, _type = obj_enemy_basic) {
    return instance_create_layer(_x, _y, "Enemies", _type);
}

// Chamando funções
say_hello();
deal_damage(obj_player, 25);
var dist = calculate_distance(x, y, mouse_x, mouse_y);
var enemy = spawn_enemy(100, 100);
var boss = spawn_enemy(200, 200, obj_boss);`
                    }
                ]
            },
            arrays: {
                title: 'Arrays e Structs',
                subtitle: 'GameMaker Language',
                description: 'Estruturas de dados para armazenar coleções.',
                info: {
                    title: 'Tipos de Estruturas',
                    items: [
                        '**Arrays**: Listas ordenadas por índice numérico.',
                        '**Structs**: Objetos com pares chave-valor.',
                        '**DS Lists**: Listas dinâmicas (legado).',
                        '**DS Maps**: Mapas chave-valor (legado).'
                    ]
                },
                examples: [
                    {
                        code: `// Arrays
var inventory = ["Espada", "Escudo", "Poção"];
inventory[3] = "Arco";  // Adicionar item

var primeiro = inventory[0];  // "Espada"
var tamanho = array_length(inventory);  // 4

// Arrays 2D
var grid = [];
for (var i = 0; i < 10; i++) {
    grid[i] = [];
    for (var j = 0; j < 10; j++) {
        grid[i][j] = 0;
    }
}

// Funções de Array
array_push(inventory, "Capacete");  // Adiciona no final
var item = array_pop(inventory);     // Remove do final
array_insert(inventory, 0, "Anel");  // Insere na posição
array_delete(inventory, 1, 1);       // Remove 1 item da posição 1

// Structs
var player = {
    name: "Hero",
    health: 100,
    mana: 50,
    inventory: ["Espada", "Escudo"]
};

// Acessar struct
var nome = player.name;
var hp = player.health;
player.health -= 10;

// Struct dinâmico
player.new_stat = 999;  // Adiciona nova propriedade
var keys = variable_struct_get_names(player);`
                    }
                ]
            },
            movimento: {
                title: 'Movimento',
                subtitle: 'GameMaker Language',
                description: 'Técnicas de movimento para personagens e objetos.',
                examples: [
                    {
                        code: `// STEP EVENT - Movimento básico com teclado
var move_x = keyboard_check(vk_right) - keyboard_check(vk_left);
var move_y = keyboard_check(vk_down) - keyboard_check(vk_up);

x += move_x * speed;
y += move_y * speed;

// Movimento suave com aceleração
hspd = lerp(hspd, move_x * max_speed, 0.2);
vspd = lerp(vspd, move_y * max_speed, 0.2);
x += hspd;
y += vspd;

// Movimento em direção ao mouse
var dir = point_direction(x, y, mouse_x, mouse_y);
var dist = point_distance(x, y, mouse_x, mouse_y);

if (dist > 5) {
    x += lengthdir_x(speed, dir);
    y += lengthdir_y(speed, dir);
}

// Movimento com colisão
if (!place_meeting(x + hspd, y, obj_wall)) {
    x += hspd;
} else {
    while (!place_meeting(x + sign(hspd), y, obj_wall)) {
        x += sign(hspd);
    }
    hspd = 0;
}

// Movimento de plataforma (gravidade)
vspd += gravity_force;
if (place_meeting(x, y + vspd, obj_ground)) {
    while (!place_meeting(x, y + sign(vspd), obj_ground)) {
        y += sign(vspd);
    }
    vspd = 0;
    on_ground = true;
} else {
    y += vspd;
    on_ground = false;
}`
                    }
                ]
            },
            colisao: {
                title: 'Colisão',
                subtitle: 'GameMaker Language',
                description: 'Detecção e tratamento de colisões.',
                info: {
                    title: 'Funções de Colisão',
                    items: [
                        '**place_meeting**: Verifica colisão em posição.',
                        '**instance_place**: Retorna instância colidida.',
                        '**collision_line**: Colisão em linha reta.',
                        '**collision_circle**: Colisão em área circular.'
                    ]
                },
                examples: [
                    {
                        code: `// Verificar colisão simples
if (place_meeting(x, y, obj_enemy)) {
    health -= 10;
}

// Verificar antes de mover
if (!place_meeting(x + hspd, y, obj_wall)) {
    x += hspd;
}

// Obter instância colidida
var coin = instance_place(x, y, obj_coin);
if (coin != noone) {
    global.score += coin.value;
    instance_destroy(coin);
}

// Colisão em ponto específico
if (position_meeting(mouse_x, mouse_y, obj_button)) {
    // Mouse sobre o botão
}

// Colisão em linha (raycasting)
var hit = collision_line(x, y, target_x, target_y, obj_wall, false, true);
if (hit != noone) {
    // Algo bloqueando a visão
}

// Colisão circular (area de efeito)
var nearby = ds_list_create();
var count = collision_circle_list(x, y, 100, obj_enemy, false, true, nearby, false);
for (var i = 0; i < count; i++) {
    var enemy = nearby[| i];
    with (enemy) {
        health -= 5;  // Dano em área
    }
}
ds_list_destroy(nearby);

// Collision Event (alternativa)
// No evento Collision com obj_enemy:
health -= 10;
with (other) {
    instance_destroy();
}`
                    }
                ]
            },
            desenho: {
                title: 'Desenho (Draw)',
                subtitle: 'GameMaker Language',
                description: 'Renderização de gráficos, sprites e texto.',
                examples: [
                    {
                        code: `// DRAW EVENT

// Desenhar sprite do objeto
draw_self();

// Desenhar sprite específico
draw_sprite(spr_icon, 0, x, y);
draw_sprite_ext(spr_icon, 0, x, y, 2, 2, 0, c_white, 1);
// (sprite, frame, x, y, xscale, yscale, rotation, color, alpha)

// Desenhar texto
draw_set_font(fnt_game);
draw_set_color(c_white);
draw_set_halign(fa_center);
draw_text(x, y - 30, "Player");

// Texto com formatação
draw_text_ext(x, y, "Texto longo que\nquebra linha", 20, 200);
// (x, y, texto, separação, largura_max)

// Formas básicas
draw_rectangle(0, 0, 100, 50, false);  // Preenchido
draw_rectangle(0, 0, 100, 50, true);   // Só borda
draw_circle(x, y, 50, false);
draw_line(x1, y1, x2, y2);
draw_line_width(x1, y1, x2, y2, 3);

// Cores e alpha
draw_set_color(c_red);
draw_set_alpha(0.5);
draw_circle(x, y, 30, false);
draw_set_alpha(1);  // Resetar

// Barra de vida
var bar_width = 50;
var bar_height = 6;
var hp_percent = health / max_health;

draw_set_color(c_red);
draw_rectangle(x - bar_width/2, y - 40, x + bar_width/2, y - 40 + bar_height, false);
draw_set_color(c_green);
draw_rectangle(x - bar_width/2, y - 40, x - bar_width/2 + (bar_width * hp_percent), y - 40 + bar_height, false);`
                    }
                ]
            },
            rooms: {
                title: 'Rooms e Instâncias',
                subtitle: 'GameMaker Language',
                description: 'Gerenciamento de cenas e criação de objetos.',
                examples: [
                    {
                        code: `// Criar instância
var bullet = instance_create_layer(x, y, "Instances", obj_bullet);
bullet.direction = point_direction(x, y, mouse_x, mouse_y);
bullet.speed = 10;

// Criar em profundidade específica
var effect = instance_create_depth(x, y, -100, obj_explosion);

// Destruir instância
instance_destroy();  // Destrói a instância atual
instance_destroy(other);  // Destrói outra instância

// Verificar se instância existe
if (instance_exists(obj_player)) {
    var player = instance_find(obj_player, 0);
}

// Contar instâncias
var enemy_count = instance_number(obj_enemy);

// Mudar de room
room_goto(rm_level_2);
room_goto_next();  // Próxima room
room_goto_previous();  // Room anterior
room_restart();  // Reiniciar room atual

// Persistência (objeto continua entre rooms)
persistent = true;

// Verificar room atual
if (room == rm_menu) {
    // Estamos no menu
}

// Dimensões da room
var largura = room_width;
var altura = room_height;`
                    }
                ]
            },
            input: {
                title: 'Input (Teclado/Mouse)',
                subtitle: 'GameMaker Language',
                description: 'Captura de entrada do jogador.',
                info: {
                    title: 'Funções de Input',
                    items: [
                        '**_check**: Verdadeiro enquanto pressionado.',
                        '**_pressed**: Verdadeiro apenas no frame que pressionou.',
                        '**_released**: Verdadeiro apenas no frame que soltou.',
                        '**Teclas especiais**: vk_left, vk_right, vk_space, vk_shift, etc.'
                    ]
                },
                examples: [
                    {
                        code: `// STEP EVENT

// Teclado - Check (contínuo)
if (keyboard_check(vk_right)) {
    x += 5;  // Move enquanto segura
}

// Teclado - Pressed (uma vez)
if (keyboard_check_pressed(vk_space)) {
    // Pulo - executa só uma vez
    if (on_ground) {
        vspd = -jump_force;
    }
}

// Teclado - Released
if (keyboard_check_released(ord("E"))) {
    // Soltou a tecla E
}

// Letras e números
if (keyboard_check(ord("W"))) { y -= speed; }
if (keyboard_check(ord("A"))) { x -= speed; }
if (keyboard_check(ord("S"))) { y += speed; }
if (keyboard_check(ord("D"))) { x += speed; }

// Mouse
if (mouse_check_button(mb_left)) {
    // Botão esquerdo segurado
}

if (mouse_check_button_pressed(mb_right)) {
    // Clique direito (uma vez)
    instance_create_layer(mouse_x, mouse_y, "Instances", obj_marker);
}

// Posição do mouse
image_angle = point_direction(x, y, mouse_x, mouse_y);

// Mouse wheel
if (mouse_wheel_up()) { zoom += 0.1; }
if (mouse_wheel_down()) { zoom -= 0.1; }`
                    }
                ]
            },
            audio: {
                title: 'Áudio',
                subtitle: 'GameMaker Language',
                description: 'Reprodução de sons e músicas.',
                examples: [
                    {
                        code: `// Tocar som simples
audio_play_sound(snd_jump, 1, false);
// (sound, prioridade, loop)

// Tocar música (com loop)
audio_play_sound(snd_music_level1, 0, true);

// Guardar referência
var music = audio_play_sound(snd_music, 0, true);

// Parar som
audio_stop_sound(snd_music);
audio_stop_sound(music);  // Por referência
audio_stop_all();  // Para todos

// Volume (0 a 1)
audio_sound_gain(music, 0.5, 0);  // 50% volume instantâneo
audio_sound_gain(music, 1, 1000);  // Fade para 100% em 1 segundo

// Volume global
audio_set_master_gain(0, 0.8);  // 80% volume master

// Verificar se está tocando
if (audio_is_playing(snd_music)) {
    // Música ainda tocando
}

// Som posicional (3D)
audio_play_sound_at(snd_explosion, x, y, 0, 100, 300, 1, false, 1);
// (sound, x, y, z, falloff_ref, falloff_max, falloff_factor, loop, prioridade)

// Pitch (velocidade)
audio_sound_pitch(music, 1.5);  // 50% mais rápido`
                    }
                ]
            },
            camera: {
                title: 'Câmera',
                subtitle: 'GameMaker Language',
                description: 'Controle de câmera e viewport.',
                examples: [
                    {
                        code: `// CREATE EVENT do objeto de câmera
cam = camera_create();
var view_w = 640;
var view_h = 360;

camera_set_view_size(cam, view_w, view_h);
view_camera[0] = cam;
view_enabled = true;
view_visible[0] = true;

// STEP EVENT - Seguir jogador
if (instance_exists(obj_player)) {
    var cam_x = obj_player.x - (view_w / 2);
    var cam_y = obj_player.y - (view_h / 2);
    
    // Suavizar movimento
    var current_x = camera_get_view_x(cam);
    var current_y = camera_get_view_y(cam);
    
    cam_x = lerp(current_x, cam_x, 0.1);
    cam_y = lerp(current_y, cam_y, 0.1);
    
    // Limitar à room
    cam_x = clamp(cam_x, 0, room_width - view_w);
    cam_y = clamp(cam_y, 0, room_height - view_h);
    
    camera_set_view_pos(cam, cam_x, cam_y);
}

// Zoom
camera_set_view_size(cam, view_w * zoom, view_h * zoom);

// Screen shake
var shake_x = random_range(-shake_amount, shake_amount);
var shake_y = random_range(-shake_amount, shake_amount);
camera_set_view_pos(cam, cam_x + shake_x, cam_y + shake_y);`
                    }
                ]
            },
            alarms: {
                title: 'Alarms e Timers',
                subtitle: 'GameMaker Language',
                description: 'Temporizadores para eventos atrasados.',
                examples: [
                    {
                        code: `// CREATE EVENT
alarm[0] = room_speed * 2;  // 2 segundos
fire_rate = room_speed / 4; // 4 tiros por segundo

// ALARM 0 EVENT
show_debug_message("Alarm 0 disparou!");
instance_create_layer(x, y, "Instances", obj_enemy);
alarm[0] = room_speed * 3;  // Repetir em 3 segundos

// STEP EVENT - Tiro com cooldown
if (mouse_check_button(mb_left) && can_shoot) {
    instance_create_layer(x, y, "Bullets", obj_bullet);
    can_shoot = false;
    alarm[1] = fire_rate;
}

// ALARM 1 EVENT
can_shoot = true;

// Timer manual (alternativa)
timer++;
if (timer >= room_speed) {
    timer = 0;
    // Executar a cada segundo
}

// Conversões de tempo
var segundos = 5;
var frames = segundos * room_speed;

// Verificar alarm
if (alarm[0] > 0) {
    // Alarm 0 está contando
    var tempo_restante = alarm[0] / room_speed;
}

// Cancelar alarm
alarm[0] = -1;`
                    }
                ]
            },
            particulas: {
                title: 'Partículas',
                subtitle: 'GameMaker Language',
                description: 'Sistema de partículas para efeitos visuais.',
                examples: [
                    {
                        code: `// CREATE EVENT - Configurar sistema de partículas
part_system = part_system_create();
part_system_depth(part_system, -100);

// Criar tipo de partícula
part_fire = part_type_create();
part_type_shape(part_fire, pt_shape_pixel);
part_type_size(part_fire, 2, 4, -0.1, 0);
part_type_color3(part_fire, c_yellow, c_orange, c_red);
part_type_alpha3(part_fire, 1, 0.8, 0);
part_type_speed(part_fire, 1, 3, -0.05, 0);
part_type_direction(part_fire, 80, 100, 0, 10);
part_type_gravity(part_fire, 0.05, 90);
part_type_life(part_fire, 20, 40);

// Criar emitter
emitter = part_emitter_create(part_system);
part_emitter_region(part_system, emitter, x-5, x+5, y-5, y+5, ps_shape_ellipse, ps_distr_linear);
part_emitter_stream(part_system, emitter, part_fire, 5);

// STEP EVENT - Atualizar posição
part_emitter_region(part_system, emitter, x-5, x+5, y-5, y+5, ps_shape_ellipse, ps_distr_linear);

// Burst (explosão)
part_emitter_burst(part_system, emitter, part_fire, 50);

// CLEANUP EVENT
part_type_destroy(part_fire);
part_emitter_destroy(part_system, emitter);
part_system_destroy(part_system);`
                    }
                ]
            },
            salvamento: {
                title: 'Save/Load',
                subtitle: 'GameMaker Language',
                description: 'Salvar e carregar dados do jogo.',
                examples: [
                    {
                        code: `// Salvar com INI (simples)
ini_open("save.ini");
ini_write_real("Player", "health", health);
ini_write_real("Player", "x", x);
ini_write_real("Player", "y", y);
ini_write_string("Player", "name", player_name);
ini_write_real("Game", "score", global.score);
ini_close();

// Carregar com INI
ini_open("save.ini");
health = ini_read_real("Player", "health", 100);  // 100 = default
x = ini_read_real("Player", "x", 0);
y = ini_read_real("Player", "y", 0);
player_name = ini_read_string("Player", "name", "Hero");
global.score = ini_read_real("Game", "score", 0);
ini_close();

// Salvar com JSON (mais flexível)
var save_data = {
    player: {
        health: health,
        x: x,
        y: y,
        inventory: inventory
    },
    game: {
        score: global.score,
        level: room
    }
};

var json_string = json_stringify(save_data);
var file = file_text_open_write("save.json");
file_text_write_string(file, json_string);
file_text_close(file);

// Carregar JSON
var file = file_text_open_read("save.json");
var json_string = file_text_read_string(file);
file_text_close(file);

var save_data = json_parse(json_string);
health = save_data.player.health;
x = save_data.player.x;`
                    }
                ]
            },
            lengthdir: {
                title: 'Lengthdir (Vetores)',
                subtitle: 'GameMaker Language',
                description: 'Funções lengthdir_x e lengthdir_y convertem coordenadas polares (distância + ângulo) em coordenadas cartesianas (x, y). Essenciais para movimento circular, projéteis e posicionamento.',
                info: {
                    title: 'Conceitos Importantes',
                    items: [
                        '**lengthdir_x(len, dir)**: Retorna componente X de um vetor.',
                        '**lengthdir_y(len, dir)**: Retorna componente Y de um vetor.',
                        '**Ângulos**: 0° = direita, 90° = cima, 180° = esquerda, 270° = baixo.',
                        '**Uso comum**: Projéteis, órbitas, spawns em círculo, rotação.'
                    ]
                },
                examples: [
                    {
                        code: `// ========== CONCEITO BÁSICO ==========
// lengthdir converte: distância + ângulo → posição X,Y

// Exemplo: ponto a 100 pixels, 45 graus
var dist = 100;
var angle = 45;
var offset_x = lengthdir_x(dist, angle);  // ~70.7
var offset_y = lengthdir_y(dist, angle);  // ~-70.7

// Posição final
var target_x = x + offset_x;
var target_y = y + offset_y;


// ========== PROJÉTEIS / TIROS ==========
// Criar bala na direção do mouse
var bullet = instance_create_layer(x, y, "Bullets", obj_bullet);
var dir = point_direction(x, y, mouse_x, mouse_y);
var spd = 10;

bullet.hspd = lengthdir_x(spd, dir);
bullet.vspd = lengthdir_y(spd, dir);

// No obj_bullet STEP:
x += hspd;
y += vspd;


// ========== SPAWN EM CÍRCULO ==========
// Criar 8 inimigos em círculo ao redor do player
var num_enemies = 8;
var spawn_radius = 150;

for (var i = 0; i < num_enemies; i++) {
    var angle = (360 / num_enemies) * i;  // 0, 45, 90, 135...
    var spawn_x = x + lengthdir_x(spawn_radius, angle);
    var spawn_y = y + lengthdir_y(spawn_radius, angle);
    instance_create_layer(spawn_x, spawn_y, "Enemies", obj_enemy);
}


// ========== ÓRBITA / ROTAÇÃO ==========
// CREATE EVENT
orbit_angle = 0;
orbit_radius = 80;
orbit_speed = 2;

// STEP EVENT - Objeto orbita ao redor de um ponto central
orbit_angle += orbit_speed;
x = obj_player.x + lengthdir_x(orbit_radius, orbit_angle);
y = obj_player.y + lengthdir_y(orbit_radius, orbit_angle);


// ========== ARMA COM OFFSET ==========
// Posicionar arma na mão do personagem
var arm_length = 20;
var aim_dir = point_direction(x, y, mouse_x, mouse_y);

gun_x = x + lengthdir_x(arm_length, aim_dir);
gun_y = y + lengthdir_y(arm_length, aim_dir);

// Spawn da bala na ponta da arma
var barrel_length = 15;
var bullet_x = gun_x + lengthdir_x(barrel_length, aim_dir);
var bullet_y = gun_y + lengthdir_y(barrel_length, aim_dir);


// ========== SPREAD / DISPERSÃO ==========
// Tiro com spread (shotgun)
var base_dir = point_direction(x, y, mouse_x, mouse_y);
var spread = 30;  // ângulo total de dispersão
var num_bullets = 5;

for (var i = 0; i < num_bullets; i++) {
    var offset = -spread/2 + (spread / (num_bullets-1)) * i;
    var bullet_dir = base_dir + offset;
    
    var bullet = instance_create_layer(x, y, "Bullets", obj_bullet);
    bullet.hspd = lengthdir_x(8, bullet_dir);
    bullet.vspd = lengthdir_y(8, bullet_dir);
}


// ========== MOVIMENTO SENOIDAL ==========
// Movimento em onda (projétil ou inimigo)
// CREATE
wave_offset = 0;
base_dir = 0;  // direção principal
wave_amplitude = 30;
wave_speed = 10;

// STEP
wave_offset += wave_speed;
var wave_dir = base_dir + 90;  // perpendicular
var wave = sin(degtorad(wave_offset)) * wave_amplitude;

x += lengthdir_x(5, base_dir) + lengthdir_x(wave, wave_dir);
y += lengthdir_y(5, base_dir) + lengthdir_y(wave, wave_dir);


// ========== DASH / INVESTIDA ==========
// Dash na direção do movimento
if (keyboard_check_pressed(vk_shift) && can_dash) {
    var dash_dir = point_direction(0, 0, hspd, vspd);  // direção do movimento
    var dash_distance = 100;
    
    // Verificar colisão antes de mover
    var dash_x = x + lengthdir_x(dash_distance, dash_dir);
    var dash_y = y + lengthdir_y(dash_distance, dash_dir);
    
    if (!place_meeting(dash_x, dash_y, obj_wall)) {
        x = dash_x;
        y = dash_y;
    }
    can_dash = false;
    alarm[0] = room_speed;  // cooldown
}


// ========== KNOCKBACK ==========
// Empurrar inimigo para trás
function apply_knockback(_target, _source, _force) {
    var knock_dir = point_direction(_source.x, _source.y, _target.x, _target.y);
    _target.hspd += lengthdir_x(_force, knock_dir);
    _target.vspd += lengthdir_y(_force, knock_dir);
}

// Uso:
apply_knockback(obj_enemy, self, 15);`
                    }
                ]
            }
        }
    },
    lua: {
        name: 'Lua',
        topics: {
            variaveis: {
                title: 'Variáveis',
                subtitle: 'Lua',
                description: 'Lua é dinamicamente tipado com variáveis locais e globais.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**local**: Declara variáveis com escopo local.',
                        '**Sem declaração**: Variáveis sem local são globais por padrão.',
                        '**nil**: Valor para variáveis não inicializadas.'
                    ]
                },
                examples: [
                    {
                        code: `local nome = "João"
local idade = 25
local altura = 1.75
local ativo = true

-- Variável global (evitar)
global = "visível em todo lugar"

-- Múltiplas atribuições
local x, y, z = 1, 2, 3`
                    }
                ]
            },
            funcoes: {
                title: 'Funções',
                subtitle: 'Lua',
                description: 'Funções são cidadãos de primeira classe em Lua.',
                examples: [
                    {
                        code: `function somar(a, b)
    return a + b
end

-- Função anônima
local subtrair = function(a, b)
    return a - b
end

-- Múltiplos retornos
function getDados()
    return "João", 25, "São Paulo"
end

local nome, idade, cidade = getDados()`
                    }
                ]
            },
            condicionais: {
                title: 'Condicionais',
                subtitle: 'Lua',
                description: 'Estruturas if/elseif/else e operadores lógicos.',
                examples: [
                    {
                        code: `if idade >= 18 then
    print("Maior de idade")
elseif idade >= 13 then
    print("Adolescente")
else
    print("Criança")
end

-- Operador ternário (usando and/or)
local resultado = idade >= 18 and "Adulto" or "Jovem"`
                    }
                ]
            },
            lacos: {
                title: 'Laços de Repetição',
                subtitle: 'Lua',
                description: 'Loops for, while e repeat-until.',
                examples: [
                    {
                        code: `-- For numérico
for i = 1, 5 do
    print(i)
end

-- For genérico (iteração)
local frutas = {"maçã", "banana", "laranja"}
for i, fruta in ipairs(frutas) do
    print(i, fruta)
end

-- While
while condicao do
    -- código
end

-- Repeat-until
repeat
    -- código
until condicao`
                    }
                ]
            },
            tabelas: {
                title: 'Tabelas',
                subtitle: 'Lua',
                description: 'Estrutura de dados única que serve como array e dicionário.',
                examples: [
                    {
                        code: `-- Array (índice começa em 1)
local numeros = {10, 20, 30, 40, 50}
print(numeros[1])  -- 10

-- Dicionário
local pessoa = {
    nome = "João",
    idade = 30,
    cidade = "São Paulo"
}

-- Inserir e remover
table.insert(numeros, 60)
table.remove(numeros, 1)`
                    }
                ]
            },
            strings: {
                title: 'Strings',
                subtitle: 'Lua',
                description: 'Manipulação de texto e concatenação.',
                examples: [
                    {
                        code: `local nome = "João"
local sobrenome = "Silva"

-- Concatenação
local nomeCompleto = nome .. " " .. sobrenome

-- String multilinha
local texto = [[
    Texto em
    múltiplas linhas
]]

-- Funções úteis
print(string.upper(nome))  -- JOÃO
print(string.len(nome))    -- 4
print(string.sub(nome, 1, 2))  -- Jo`
                    }
                ]
            },
            modulos: {
                title: 'Módulos',
                subtitle: 'Lua',
                description: 'Sistema de módulos para organização de código.',
                examples: [
                    {
                        code: `-- Criar módulo (arquivo: meumodulo.lua)
local M = {}

function M.somar(a, b)
    return a + b
end

return M

-- Usar módulo
local meumodulo = require("meumodulo")
print(meumodulo.somar(5, 3))  -- 8`
                    }
                ]
            }
        }
    },
    expressjs: {
        name: 'Express.js',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'Express.js',
                description: 'Express é um framework web minimalista para Node.js.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**npm init -y**: Inicializa um projeto Node.js.',
                        '**npm install express**: Instala o Express.',
                        '**Porta padrão**: Geralmente usa a porta 3000 para desenvolvimento.'
                    ]
                },
                examples: [
                    {
                        code: `const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(\`Servidor rodando em http://localhost:\${PORT}\`);
});`
                    }
                ]
            },
            rotas: {
                title: 'Rotas',
                subtitle: 'Express.js',
                description: 'Definição de endpoints para diferentes métodos HTTP.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**GET**: Buscar dados do servidor.',
                        '**POST**: Enviar dados para criar recursos.',
                        '**PUT/PATCH**: Atualizar recursos existentes.',
                        '**DELETE**: Remover recursos.'
                    ]
                },
                examples: [
                    {
                        code: `// Rota GET
app.get('/usuarios', (req, res) => {
    res.json([{ id: 1, nome: 'João' }]);
});

// Rota POST
app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body;
    res.status(201).json(novoUsuario);
});

// Rota PUT
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, ...req.body });
});

// Rota DELETE
app.delete('/usuarios/:id', (req, res) => {
    res.status(204).send();
});`
                    }
                ]
            },
            parametros: {
                title: 'Parâmetros',
                subtitle: 'Express.js',
                description: 'Captura de dados via URL, query strings e body.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**req.params**: Parâmetros da URL (/user/:id).',
                        '**req.query**: Query strings (?nome=João).',
                        '**req.body**: Corpo da requisição (JSON, form-data).'
                    ]
                },
                examples: [
                    {
                        code: `// Parâmetros de rota
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    res.send(\`Usuário ID: \${id}\`);
});

// Query strings
// URL: /busca?termo=express&pagina=1
app.get('/busca', (req, res) => {
    const { termo, pagina } = req.query;
    res.json({ termo, pagina });
});

// Body (precisa de middleware)
app.use(express.json());

app.post('/usuarios', (req, res) => {
    const { nome, email } = req.body;
    res.json({ nome, email });
});`
                    }
                ]
            },
            middleware: {
                title: 'Middleware',
                subtitle: 'Express.js',
                description: 'Funções que processam requisições antes das rotas.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**app.use()**: Aplica middleware globalmente.',
                        '**next()**: Passa para o próximo middleware.',
                        '**Ordem importa**: Middlewares são executados na ordem definida.'
                    ]
                },
                examples: [
                    {
                        code: `// Middleware de log
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();
};

app.use(logger);

// Middleware de autenticação
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ erro: 'Token necessário' });
    }
    next();
};

// Aplicar em rota específica
app.get('/admin', auth, (req, res) => {
    res.send('Área restrita');
});

// Middlewares nativos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));`
                    }
                ]
            },
            router: {
                title: 'Router',
                subtitle: 'Express.js',
                description: 'Organização de rotas em módulos separados.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**express.Router()**: Cria um roteador modular.',
                        '**Prefixo de rota**: Agrupa rotas sob um caminho comum.',
                        '**Separação de concerns**: Mantém o código organizado.'
                    ]
                },
                examples: [
                    {
                        code: `// routes/usuarios.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, nome: 'João' }]);
});

router.get('/:id', (req, res) => {
    res.json({ id: req.params.id });
});

router.post('/', (req, res) => {
    res.status(201).json(req.body);
});

module.exports = router;

// app.js
const usuariosRouter = require('./routes/usuarios');
app.use('/api/usuarios', usuariosRouter);
// Rotas: GET /api/usuarios, GET /api/usuarios/:id, etc.`
                    }
                ]
            },
            erros: {
                title: 'Tratamento de Erros',
                subtitle: 'Express.js',
                description: 'Captura e tratamento de erros na aplicação.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**4 parâmetros**: (err, req, res, next) define um error handler.',
                        '**Deve ser o último**: Middleware de erro vai ao final.',
                        '**try/catch**: Use em rotas async.'
                    ]
                },
                examples: [
                    {
                        code: `// Rota com erro
app.get('/erro', (req, res, next) => {
    try {
        throw new Error('Algo deu errado!');
    } catch (error) {
        next(error);
    }
});

// Rota async com tratamento
app.get('/usuarios/:id', async (req, res, next) => {
    try {
        const usuario = await buscarUsuario(req.params.id);
        if (!usuario) {
            return res.status(404).json({ erro: 'Não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        next(error);
    }
});

// Middleware de erro (4 parâmetros)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        erro: 'Erro interno do servidor',
        mensagem: err.message
    });
});`
                    }
                ]
            },
            respostas: {
                title: 'Respostas',
                subtitle: 'Express.js',
                description: 'Métodos para enviar diferentes tipos de resposta.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**res.json()**: Envia resposta JSON.',
                        '**res.send()**: Envia texto ou HTML.',
                        '**res.status()**: Define código HTTP.',
                        '**res.redirect()**: Redireciona para outra URL.'
                    ]
                },
                examples: [
                    {
                        code: `// JSON
app.get('/api/dados', (req, res) => {
    res.json({ status: 'ok', dados: [] });
});

// Status + JSON
app.post('/usuarios', (req, res) => {
    res.status(201).json({ criado: true });
});

// Texto/HTML
app.get('/html', (req, res) => {
    res.send('<h1>Olá Mundo</h1>');
});

// Arquivo
app.get('/download', (req, res) => {
    res.download('./arquivo.pdf');
});

// Redirect
app.get('/antiga', (req, res) => {
    res.redirect('/nova');
});

// Render (com template engine)
app.get('/pagina', (req, res) => {
    res.render('index', { titulo: 'Home' });
});`
                    }
                ]
            },
            cors: {
                title: 'CORS',
                subtitle: 'Express.js',
                description: 'Configuração de Cross-Origin Resource Sharing.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**npm install cors**: Instala o pacote CORS.',
                        '**Origens**: Controla quais domínios podem acessar a API.',
                        '**Métodos**: Define quais métodos HTTP são permitidos.'
                    ]
                },
                examples: [
                    {
                        code: `const cors = require('cors');

// Permitir todas as origens
app.use(cors());

// Configuração personalizada
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Múltiplas origens
const origensPermitidas = [
    'http://localhost:3000',
    'https://meusite.com'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || origensPermitidas.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Não permitido pelo CORS'));
        }
    }
}));`
                    }
                ]
            },
            estrutura: {
                title: 'Estrutura de Projeto',
                subtitle: 'Express.js',
                description: 'Organização recomendada de arquivos e pastas.',
                examples: [
                    {
                        code: `// Estrutura de pastas
/*
meu-projeto/
├── src/
│   ├── controllers/
│   │   └── usuarioController.js
│   ├── routes/
│   │   └── usuarioRoutes.js
│   ├── middlewares/
│   │   └── auth.js
│   ├── models/
│   │   └── Usuario.js
│   ├── config/
│   │   └── database.js
│   └── app.js
├── .env
├── package.json
└── server.js
*/

// server.js
require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`Servidor rodando na porta \${PORT}\`);
});`
                    }
                ]
            }
        }
    },
    docker: {
        name: 'Docker',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'Docker',
                description: 'Docker é uma plataforma para criar, implantar e executar aplicações em containers.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Container**: Ambiente isolado e leve para executar aplicações.',
                        '**Imagem**: Template imutável para criar containers.',
                        '**Dockerfile**: Arquivo de instruções para construir imagens.'
                    ]
                },
                examples: [
                    {
                        code: `# Verificar instalação
docker --version

# Executar container
docker run hello-world

# Listar containers em execução
docker ps

# Listar todos os containers
docker ps -a

# Listar imagens
docker images`
                    }
                ]
            },
            dockerfile: {
                title: 'Dockerfile',
                subtitle: 'Docker',
                description: 'Arquivo de instruções para construir imagens Docker.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**FROM**: Define a imagem base.',
                        '**WORKDIR**: Define o diretório de trabalho.',
                        '**COPY/ADD**: Copia arquivos para a imagem.',
                        '**RUN**: Executa comandos durante o build.',
                        '**CMD**: Comando padrão ao iniciar o container.'
                    ]
                },
                examples: [
                    {
                        code: `# Dockerfile para Node.js
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]`
                    }
                ]
            },
            comandos: {
                title: 'Comandos Essenciais',
                subtitle: 'Docker',
                description: 'Comandos mais utilizados no dia a dia.',
                examples: [
                    {
                        code: `# Construir imagem
docker build -t minha-app .

# Executar container
docker run -d -p 3000:3000 --name app minha-app

# Parar container
docker stop app

# Remover container
docker rm app

# Remover imagem
docker rmi minha-app

# Ver logs
docker logs app

# Acessar terminal do container
docker exec -it app sh`
                    }
                ]
            },
            compose: {
                title: 'Docker Compose',
                subtitle: 'Docker',
                description: 'Orquestração de múltiplos containers.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**services**: Define os containers da aplicação.',
                        '**volumes**: Persistência de dados.',
                        '**networks**: Comunicação entre containers.',
                        '**depends_on**: Define dependências entre serviços.'
                    ]
                },
                examples: [
                    {
                        code: `# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: senha
      POSTGRES_DB: meudb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
                    }
                ]
            },
            volumes: {
                title: 'Volumes',
                subtitle: 'Docker',
                description: 'Persistência e compartilhamento de dados.',
                examples: [
                    {
                        code: `# Criar volume
docker volume create meu-volume

# Listar volumes
docker volume ls

# Usar volume no container
docker run -v meu-volume:/app/data minha-app

# Bind mount (pasta local)
docker run -v $(pwd)/dados:/app/data minha-app

# Remover volume
docker volume rm meu-volume

# Remover volumes não utilizados
docker volume prune`
                    }
                ]
            },
            redes: {
                title: 'Redes',
                subtitle: 'Docker',
                description: 'Comunicação entre containers.',
                examples: [
                    {
                        code: `# Criar rede
docker network create minha-rede

# Listar redes
docker network ls

# Conectar container à rede
docker run --network minha-rede minha-app

# Conectar container existente
docker network connect minha-rede app

# Inspecionar rede
docker network inspect minha-rede

# Remover rede
docker network rm minha-rede`
                    }
                ]
            }
        }
    },
    sqlite: {
        name: 'SQLite',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'SQLite',
                description: 'SQLite é um banco de dados leve, serverless e autocontido.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Serverless**: Não precisa de servidor separado.',
                        '**Arquivo único**: Todo o banco fica em um arquivo .db.',
                        '**Ideal para**: Apps mobile, desktop, protótipos e pequenos projetos.'
                    ]
                },
                examples: [
                    {
                        code: `-- Abrir/criar banco de dados
sqlite3 meubanco.db

-- Comandos úteis do CLI
.tables          -- Listar tabelas
.schema          -- Ver estrutura
.headers on      -- Mostrar cabeçalhos
.mode column     -- Formatação em colunas
.quit            -- Sair`
                    }
                ]
            },
            tabelas: {
                title: 'Criar Tabelas',
                subtitle: 'SQLite',
                description: 'Definição de estrutura de dados.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**INTEGER PRIMARY KEY**: Auto-incremento automático.',
                        '**TEXT**: Strings de qualquer tamanho.',
                        '**REAL**: Números decimais.',
                        '**BLOB**: Dados binários.'
                    ]
                },
                examples: [
                    {
                        code: `-- Criar tabela
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    idade INTEGER,
    ativo INTEGER DEFAULT 1,
    criado_em TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Criar tabela com chave estrangeira
CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER,
    total REAL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);`
                    }
                ]
            },
            crud: {
                title: 'CRUD',
                subtitle: 'SQLite',
                description: 'Operações básicas de Create, Read, Update e Delete.',
                examples: [
                    {
                        code: `-- INSERT
INSERT INTO usuarios (nome, email, idade) 
VALUES ('João', 'joao@email.com', 25);

-- SELECT
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE idade > 18;
SELECT * FROM usuarios ORDER BY nome LIMIT 10;

-- UPDATE
UPDATE usuarios SET idade = 26 WHERE id = 1;

-- DELETE
DELETE FROM usuarios WHERE id = 1;`
                    }
                ]
            },
            consultas: {
                title: 'Consultas Avançadas',
                subtitle: 'SQLite',
                description: 'JOINs, agregações e subconsultas.',
                examples: [
                    {
                        code: `-- JOIN
SELECT u.nome, p.total
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- Agregações
SELECT COUNT(*) FROM usuarios;
SELECT AVG(idade) FROM usuarios;
SELECT cidade, COUNT(*) as total 
FROM usuarios GROUP BY cidade;

-- Subconsulta
SELECT * FROM usuarios 
WHERE idade > (SELECT AVG(idade) FROM usuarios);`
                    }
                ]
            },
            nodejs: {
                title: 'Node.js + SQLite',
                subtitle: 'SQLite',
                description: 'Integração com Node.js usando better-sqlite3.',
                examples: [
                    {
                        code: `// npm install better-sqlite3
const Database = require('better-sqlite3');
const db = new Database('meubanco.db');

// Criar tabela
db.exec(\`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE
    )
\`);

// Inserir
const insert = db.prepare('INSERT INTO usuarios (nome, email) VALUES (?, ?)');
insert.run('João', 'joao@email.com');

// Buscar
const select = db.prepare('SELECT * FROM usuarios WHERE id = ?');
const usuario = select.get(1);

// Buscar todos
const todos = db.prepare('SELECT * FROM usuarios').all();

// Fechar conexão
db.close();`
                    }
                ]
            }
        }
    },
    postgresql: {
        name: 'PostgreSQL',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'PostgreSQL',
                description: 'PostgreSQL é um banco de dados relacional robusto e open-source.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**ACID Compliant**: Transações seguras e confiáveis.',
                        '**JSON Support**: Suporte nativo a JSON/JSONB.',
                        '**Extensível**: Suporta tipos personalizados e extensões.'
                    ]
                },
                examples: [
                    {
                        code: `-- Conectar via psql
psql -U usuario -d banco

-- Comandos úteis
\\l          -- Listar bancos
\\c banco    -- Conectar ao banco
\\dt         -- Listar tabelas
\\d tabela   -- Descrever tabela
\\q          -- Sair

-- Criar banco de dados
CREATE DATABASE meuapp;

-- Criar usuário
CREATE USER meuuser WITH PASSWORD 'senha123';
GRANT ALL PRIVILEGES ON DATABASE meuapp TO meuuser;`
                    }
                ]
            },
            tabelas: {
                title: 'Criar Tabelas',
                subtitle: 'PostgreSQL',
                description: 'Definição de tabelas com tipos avançados.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**SERIAL**: Auto-incremento (equivale a INTEGER + sequence).',
                        '**UUID**: Identificadores únicos universais.',
                        '**JSONB**: JSON binário otimizado para consultas.',
                        '**ARRAY**: Suporte nativo a arrays.'
                    ]
                },
                examples: [
                    {
                        code: `-- Criar tabela
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    uuid UUID DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    idade INTEGER CHECK (idade >= 0),
    tags TEXT[],
    metadata JSONB,
    ativo BOOLEAN DEFAULT true,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criar índice
CREATE INDEX idx_usuarios_email ON usuarios(email);

-- Índice para JSONB
CREATE INDEX idx_metadata ON usuarios USING GIN(metadata);`
                    }
                ]
            },
            crud: {
                title: 'CRUD',
                subtitle: 'PostgreSQL',
                description: 'Operações básicas com recursos avançados.',
                examples: [
                    {
                        code: `-- INSERT com RETURNING
INSERT INTO usuarios (nome, email, tags) 
VALUES ('João', 'joao@email.com', ARRAY['dev', 'js'])
RETURNING id, uuid;

-- INSERT múltiplo
INSERT INTO usuarios (nome, email) VALUES
    ('Maria', 'maria@email.com'),
    ('Pedro', 'pedro@email.com');

-- UPSERT (INSERT ou UPDATE)
INSERT INTO usuarios (email, nome)
VALUES ('joao@email.com', 'João Silva')
ON CONFLICT (email) 
DO UPDATE SET nome = EXCLUDED.nome;

-- UPDATE com RETURNING
UPDATE usuarios SET idade = 26 WHERE id = 1 RETURNING *;

-- DELETE com RETURNING
DELETE FROM usuarios WHERE id = 1 RETURNING *;`
                    }
                ]
            },
            jsonb: {
                title: 'JSONB',
                subtitle: 'PostgreSQL',
                description: 'Trabalhando com dados JSON.',
                examples: [
                    {
                        code: `-- Inserir JSONB
UPDATE usuarios SET metadata = '{"cidade": "SP", "interesses": ["música", "tech"]}'
WHERE id = 1;

-- Consultar campo específico
SELECT metadata->>'cidade' AS cidade FROM usuarios;
SELECT metadata->'interesses' FROM usuarios;

-- Filtrar por valor JSONB
SELECT * FROM usuarios 
WHERE metadata->>'cidade' = 'SP';

-- Verificar se contém
SELECT * FROM usuarios 
WHERE metadata @> '{"cidade": "SP"}';

-- Atualizar campo específico
UPDATE usuarios 
SET metadata = jsonb_set(metadata, '{cidade}', '"RJ"')
WHERE id = 1;`
                    }
                ]
            },
            nodejs: {
                title: 'Node.js + PostgreSQL',
                subtitle: 'PostgreSQL',
                description: 'Integração com Node.js usando pg.',
                examples: [
                    {
                        code: `// npm install pg
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'meuapp',
    user: 'usuario',
    password: 'senha'
});

// Query simples
const result = await pool.query('SELECT * FROM usuarios');
console.log(result.rows);

// Query com parâmetros
const { rows } = await pool.query(
    'SELECT * FROM usuarios WHERE id = $1',
    [1]
);

// Insert com RETURNING
const insert = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
    ['João', 'joao@email.com']
);

// Transação
const client = await pool.connect();
try {
    await client.query('BEGIN');
    await client.query('INSERT INTO usuarios...');
    await client.query('INSERT INTO pedidos...');
    await client.query('COMMIT');
} catch (e) {
    await client.query('ROLLBACK');
    throw e;
} finally {
    client.release();
}`
                    }
                ]
            },
            avancado: {
                title: 'Recursos Avançados',
                subtitle: 'PostgreSQL',
                description: 'CTEs, Window Functions e mais.',
                examples: [
                    {
                        code: `-- CTE (Common Table Expression)
WITH vendas_mes AS (
    SELECT usuario_id, SUM(total) as total_vendas
    FROM pedidos
    WHERE data >= DATE_TRUNC('month', CURRENT_DATE)
    GROUP BY usuario_id
)
SELECT u.nome, v.total_vendas
FROM usuarios u
JOIN vendas_mes v ON u.id = v.usuario_id;

-- Window Function
SELECT nome, idade,
    RANK() OVER (ORDER BY idade DESC) as ranking,
    AVG(idade) OVER () as media_geral
FROM usuarios;

-- Recursive CTE (hierarquia)
WITH RECURSIVE subordinados AS (
    SELECT id, nome, gerente_id, 1 as nivel
    FROM funcionarios WHERE gerente_id IS NULL
    UNION ALL
    SELECT f.id, f.nome, f.gerente_id, s.nivel + 1
    FROM funcionarios f
    JOIN subordinados s ON f.gerente_id = s.id
)
SELECT * FROM subordinados;`
                    }
                ]
            }
        }
    },
    mysql: {
        name: 'MySQL',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'MySQL',
                description: 'MySQL é um dos bancos de dados relacionais mais populares do mundo.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Amplamente usado**: WordPress, Facebook, Twitter.',
                        '**Engines**: InnoDB (padrão, ACID), MyISAM (leitura rápida).',
                        '**Replicação**: Master-slave para alta disponibilidade.'
                    ]
                },
                examples: [
                    {
                        code: `-- Conectar via CLI
mysql -u root -p

-- Comandos úteis
SHOW DATABASES;
USE meudb;
SHOW TABLES;
DESCRIBE usuarios;

-- Criar banco de dados
CREATE DATABASE meuapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Criar usuário
CREATE USER 'meuuser'@'localhost' IDENTIFIED BY 'senha123';
GRANT ALL PRIVILEGES ON meuapp.* TO 'meuuser'@'localhost';
FLUSH PRIVILEGES;`
                    }
                ]
            },
            tabelas: {
                title: 'Criar Tabelas',
                subtitle: 'MySQL',
                description: 'Definição de estrutura com InnoDB.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**AUTO_INCREMENT**: Incremento automático.',
                        '**VARCHAR**: String de tamanho variável (max 65535).',
                        '**TEXT**: Strings longas (até 65KB).',
                        '**DATETIME**: Data e hora.'
                    ]
                },
                examples: [
                    {
                        code: `-- Criar tabela
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255) NOT NULL,
    idade INT UNSIGNED,
    ativo TINYINT(1) DEFAULT 1,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
    atualizado_em DATETIME ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Criar tabela com FK
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    total DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE=InnoDB;`
                    }
                ]
            },
            crud: {
                title: 'CRUD',
                subtitle: 'MySQL',
                description: 'Operações básicas de manipulação de dados.',
                examples: [
                    {
                        code: `-- INSERT
INSERT INTO usuarios (nome, email, senha) 
VALUES ('João', 'joao@email.com', 'hash123');

-- INSERT múltiplo
INSERT INTO usuarios (nome, email, senha) VALUES
    ('Maria', 'maria@email.com', 'hash456'),
    ('Pedro', 'pedro@email.com', 'hash789');

-- SELECT
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE ativo = 1;
SELECT * FROM usuarios ORDER BY nome ASC LIMIT 10 OFFSET 0;

-- UPDATE
UPDATE usuarios SET idade = 26 WHERE id = 1;

-- DELETE
DELETE FROM usuarios WHERE id = 1;

-- REPLACE (insert ou update)
REPLACE INTO usuarios (id, nome, email) 
VALUES (1, 'João Silva', 'joao@email.com');`
                    }
                ]
            },
            consultas: {
                title: 'Consultas Avançadas',
                subtitle: 'MySQL',
                description: 'JOINs, agregações e subconsultas.',
                examples: [
                    {
                        code: `-- INNER JOIN
SELECT u.nome, p.total
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- LEFT JOIN
SELECT u.nome, COUNT(p.id) as total_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id;

-- Agregações
SELECT 
    COUNT(*) as total,
    AVG(idade) as media_idade,
    MAX(idade) as maior_idade
FROM usuarios;

-- GROUP BY com HAVING
SELECT cidade, COUNT(*) as total
FROM usuarios
GROUP BY cidade
HAVING total > 5;

-- Subconsulta
SELECT * FROM usuarios
WHERE id IN (
    SELECT usuario_id FROM pedidos WHERE total > 1000
);`
                    }
                ]
            },
            nodejs: {
                title: 'Node.js + MySQL',
                subtitle: 'MySQL',
                description: 'Integração com Node.js usando mysql2.',
                examples: [
                    {
                        code: `// npm install mysql2
const mysql = require('mysql2/promise');

// Criar pool de conexões
const pool = mysql.createPool({
    host: 'localhost',
    user: 'usuario',
    password: 'senha',
    database: 'meuapp',
    waitForConnections: true,
    connectionLimit: 10
});

// Query simples
const [rows] = await pool.query('SELECT * FROM usuarios');

// Query com parâmetros (prepared statement)
const [users] = await pool.execute(
    'SELECT * FROM usuarios WHERE id = ?',
    [1]
);

// Insert
const [result] = await pool.execute(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    ['João', 'joao@email.com']
);
console.log('ID inserido:', result.insertId);

// Transação
const connection = await pool.getConnection();
try {
    await connection.beginTransaction();
    await connection.execute('INSERT INTO usuarios...');
    await connection.execute('INSERT INTO pedidos...');
    await connection.commit();
} catch (error) {
    await connection.rollback();
    throw error;
} finally {
    connection.release();
}`
                    }
                ]
            },
            indices: {
                title: 'Índices e Performance',
                subtitle: 'MySQL',
                description: 'Otimização de consultas com índices.',
                examples: [
                    {
                        code: `-- Criar índice simples
CREATE INDEX idx_email ON usuarios(email);

-- Índice composto
CREATE INDEX idx_nome_cidade ON usuarios(nome, cidade);

-- Índice único
CREATE UNIQUE INDEX idx_cpf ON usuarios(cpf);

-- Índice FULLTEXT (busca textual)
ALTER TABLE artigos ADD FULLTEXT(titulo, conteudo);

SELECT * FROM artigos 
WHERE MATCH(titulo, conteudo) AGAINST('mysql tutorial');

-- Ver índices da tabela
SHOW INDEX FROM usuarios;

-- Analisar query
EXPLAIN SELECT * FROM usuarios WHERE email = 'joao@email.com';

-- Remover índice
DROP INDEX idx_email ON usuarios;`
                    }
                ]
            }
        }
    },
    github: {
        name: 'GitHub',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'GitHub',
                description: 'GitHub é uma plataforma de hospedagem de código e colaboração usando Git.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Repositório**: Local onde o código é armazenado.',
                        '**Branch**: Ramificação para desenvolvimento paralelo.',
                        '**Commit**: Snapshot das alterações no código.',
                        '**Pull Request**: Solicitação para mesclar alterações.'
                    ]
                },
                examples: [
                    {
                        code: `# Configurar Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Verificar configuração
git config --list

# Clonar repositório
git clone https://github.com/usuario/repo.git

# Clonar branch específica
git clone -b develop https://github.com/usuario/repo.git`
                    }
                ]
            },
            basico: {
                title: 'Comandos Básicos',
                subtitle: 'GitHub',
                description: 'Comandos essenciais do Git para o dia a dia.',
                examples: [
                    {
                        code: `# Iniciar repositório
git init

# Verificar status
git status

# Adicionar arquivos
git add arquivo.js
git add .                 # Adicionar todos

# Commit
git commit -m "Mensagem do commit"

# Push para o repositório remoto
git push origin main

# Pull para atualizar local
git pull origin main

# Ver histórico
git log
git log --oneline`
                    }
                ]
            },
            branches: {
                title: 'Branches',
                subtitle: 'GitHub',
                description: 'Gerenciamento de branches para desenvolvimento paralelo.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**main/master**: Branch principal do projeto.',
                        '**develop**: Branch de desenvolvimento.',
                        '**feature/**: Branches para novas funcionalidades.',
                        '**hotfix/**: Branches para correções urgentes.'
                    ]
                },
                examples: [
                    {
                        code: `# Listar branches
git branch            # Locais
git branch -r         # Remotas
git branch -a         # Todas

# Criar branch
git branch feature/login

# Mudar para branch
git checkout feature/login

# Criar e mudar (atalho)
git checkout -b feature/login

# Deletar branch local
git branch -d feature/login

# Deletar branch remota
git push origin --delete feature/login

# Renomear branch atual
git branch -m novo-nome`
                    }
                ]
            },
            merge: {
                title: 'Merge e Rebase',
                subtitle: 'GitHub',
                description: 'Unificando alterações de diferentes branches.',
                examples: [
                    {
                        code: `# Merge: mesclar branch na atual
git checkout main
git merge feature/login

# Merge com mensagem
git merge feature/login -m "Merge feature login"

# Rebase: reaplica commits sobre outra branch
git checkout feature/login
git rebase main

# Resolver conflitos
# 1. Editar arquivos com conflitos
# 2. git add .
# 3. git rebase --continue

# Abortar rebase
git rebase --abort

# Squash: juntar commits
git rebase -i HEAD~3  # Últimos 3 commits`
                    }
                ]
            },
            stash: {
                title: 'Stash',
                subtitle: 'GitHub',
                description: 'Salvar alterações temporariamente.',
                examples: [
                    {
                        code: `# Guardar alterações
git stash

# Guardar com mensagem
git stash save "WIP: funcionalidade X"

# Listar stashes
git stash list

# Aplicar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{0}

# Ver conteúdo do stash
git stash show -p stash@{0}

# Deletar stash
git stash drop stash@{0}

# Limpar todos os stashes
git stash clear`
                    }
                ]
            },
            remoto: {
                title: 'Repositórios Remotos',
                subtitle: 'GitHub',
                description: 'Trabalhando com repositórios remotos.',
                examples: [
                    {
                        code: `# Ver remotos configurados
git remote -v

# Adicionar remoto
git remote add origin https://github.com/usuario/repo.git

# Alterar URL do remoto
git remote set-url origin https://github.com/usuario/novo-repo.git

# Remover remoto
git remote remove origin

# Buscar atualizações (sem merge)
git fetch origin

# Buscar e fazer merge
git pull origin main

# Push forçado (cuidado!)
git push --force origin main

# Push de nova branch
git push -u origin feature/login`
                    }
                ]
            },
            desfazer: {
                title: 'Desfazer Alterações',
                subtitle: 'GitHub',
                description: 'Reverter commits e alterações.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**reset --soft**: Mantém alterações staged.',
                        '**reset --mixed**: Mantém alterações unstaged (padrão).',
                        '**reset --hard**: Remove todas as alterações.',
                        '**revert**: Cria novo commit desfazendo alterações.'
                    ]
                },
                examples: [
                    {
                        code: `# Descartar alterações não commitadas
git checkout -- arquivo.js
git restore arquivo.js      # Git 2.23+

# Remover do staging
git reset HEAD arquivo.js
git restore --staged arquivo.js

# Voltar ao commit anterior (mantém alterações)
git reset --soft HEAD~1

# Voltar ao commit anterior (descarta tudo)
git reset --hard HEAD~1

# Reverter commit específico (cria novo commit)
git revert abc1234

# Modificar último commit
git commit --amend -m "Nova mensagem"`
                    }
                ]
            },
            gitignore: {
                title: '.gitignore',
                subtitle: 'GitHub',
                description: 'Ignorar arquivos e pastas no versionamento.',
                examples: [
                    {
                        code: `# Arquivo .gitignore

# Dependências
node_modules/
vendor/

# Build
dist/
build/
*.min.js

# Ambiente
.env
.env.local
*.log

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Padrões
*.log
*.tmp
!importante.log   # Exceção

# Pastas específicas
logs/
temp/`
                    }
                ]
            },
            pullrequest: {
                title: 'Pull Request',
                subtitle: 'GitHub',
                description: 'Fluxo de trabalho com Pull Requests.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Fork**: Cópia do repositório na sua conta.',
                        '**PR/MR**: Pull Request / Merge Request.',
                        '**Code Review**: Revisão de código antes do merge.',
                        '**CI/CD**: Integração e deploy automatizados.'
                    ]
                },
                examples: [
                    {
                        code: `# Fluxo típico de Pull Request

# 1. Fork o repositório no GitHub

# 2. Clone seu fork
git clone https://github.com/SEU-USER/repo.git

# 3. Adicione o upstream
git remote add upstream https://github.com/ORIGINAL/repo.git

# 4. Crie uma branch
git checkout -b feature/minha-feature

# 5. Faça suas alterações e commits
git add .
git commit -m "Adiciona nova feature"

# 6. Push para seu fork
git push origin feature/minha-feature

# 7. Abra um Pull Request no GitHub

# 8. Após aprovação, atualize seu fork
git checkout main
git pull upstream main
git push origin main`
                    }
                ]
            },
            tags: {
                title: 'Tags e Releases',
                subtitle: 'GitHub',
                description: 'Versionamento e releases do projeto.',
                examples: [
                    {
                        code: `# Criar tag leve
git tag v1.0.0

# Criar tag anotada (recomendado)
git tag -a v1.0.0 -m "Versão 1.0.0 - Release inicial"

# Listar tags
git tag
git tag -l "v1.*"

# Ver detalhes da tag
git show v1.0.0

# Push de tag específica
git push origin v1.0.0

# Push de todas as tags
git push origin --tags

# Deletar tag local
git tag -d v1.0.0

# Deletar tag remota
git push origin --delete v1.0.0

# Checkout em uma tag
git checkout v1.0.0`
                    }
                ]
            }
        }
    },
    bettersqlite3: {
        name: 'better-sqlite3',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'better-sqlite3',
                description: 'better-sqlite3 é a biblioteca SQLite mais rápida e simples para Node.js. Síncrona e fácil de usar.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Síncrono**: Operações síncronas (sem callbacks/promises).',
                        '**Performance**: Mais rápido que outras libs SQLite.',
                        '**Simples**: API intuitiva e direta.',
                        '**Seguro**: Suporte nativo a prepared statements.'
                    ]
                },
                examples: [
                    {
                        code: `// Instalação
npm install better-sqlite3

// Importar
const Database = require('better-sqlite3');

// Criar/Abrir banco de dados
const db = new Database('meuBanco.db');

// Com opções
const db = new Database('meuBanco.db', { 
  verbose: console.log,  // Log de queries
  fileMustExist: false   // Criar se não existir
});

// Banco em memória
const db = new Database(':memory:');

// Fechar conexão
db.close();`
                    }
                ]
            },
            tabelas: {
                title: 'Criar Tabelas',
                subtitle: 'better-sqlite3',
                description: 'Criação e estruturação de tabelas.',
                examples: [
                    {
                        code: `// Criar tabela
db.exec(\`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    idade INTEGER,
    ativo INTEGER DEFAULT 1,
    criado_em TEXT DEFAULT CURRENT_TIMESTAMP
  )
\`);

// Criar múltiplas tabelas
db.exec(\`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL,
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
  );
\`);

// Deletar tabela
db.exec('DROP TABLE IF EXISTS usuarios');`
                    }
                ]
            },
            inserir: {
                title: 'Inserir Dados',
                subtitle: 'better-sqlite3',
                description: 'Inserção de registros com prepared statements.',
                examples: [
                    {
                        code: `// Inserir um registro
const stmt = db.prepare('INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)');
const result = stmt.run('João', 'joao@email.com', 25);

console.log(result.changes);        // Linhas afetadas
console.log(result.lastInsertRowid); // ID inserido

// Usando parâmetros nomeados
const stmt = db.prepare('INSERT INTO usuarios (nome, email) VALUES (@nome, @email)');
stmt.run({ nome: 'Maria', email: 'maria@email.com' });

// Inserir vários (transação)
const inserir = db.prepare('INSERT INTO usuarios (nome, email) VALUES (?, ?)');

const inserirVarios = db.transaction((usuarios) => {
  for (const user of usuarios) {
    inserir.run(user.nome, user.email);
  }
});

inserirVarios([
  { nome: 'Ana', email: 'ana@email.com' },
  { nome: 'Pedro', email: 'pedro@email.com' },
  { nome: 'Lucas', email: 'lucas@email.com' }
]);`
                    }
                ]
            },
            consultar: {
                title: 'Consultar Dados',
                subtitle: 'better-sqlite3',
                description: 'Métodos para buscar registros.',
                info: {
                    title: 'Métodos de Consulta',
                    items: [
                        '**get()**: Retorna primeiro registro ou undefined.',
                        '**all()**: Retorna array com todos os registros.',
                        '**iterate()**: Retorna iterator para grandes datasets.',
                        '**pluck()**: Retorna apenas a primeira coluna.'
                    ]
                },
                examples: [
                    {
                        code: `// Buscar um registro
const usuario = db.prepare('SELECT * FROM usuarios WHERE id = ?').get(1);
console.log(usuario); // { id: 1, nome: 'João', ... }

// Buscar todos
const usuarios = db.prepare('SELECT * FROM usuarios').all();
console.log(usuarios); // [{ id: 1, ... }, { id: 2, ... }]

// Com condições
const ativos = db.prepare('SELECT * FROM usuarios WHERE ativo = ?').all(1);

// Parâmetros nomeados
const stmt = db.prepare('SELECT * FROM usuarios WHERE idade > @idade');
const adultos = stmt.all({ idade: 18 });

// Pluck - retorna só primeira coluna
const nomes = db.prepare('SELECT nome FROM usuarios').pluck().all();
console.log(nomes); // ['João', 'Maria', 'Ana']

// Iterate - para grandes datasets
const stmt = db.prepare('SELECT * FROM usuarios');
for (const user of stmt.iterate()) {
  console.log(user.nome);
}`
                    }
                ]
            },
            atualizar: {
                title: 'Atualizar Dados',
                subtitle: 'better-sqlite3',
                description: 'Atualização de registros existentes.',
                examples: [
                    {
                        code: `// Atualizar registro
const stmt = db.prepare('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?');
const result = stmt.run('João Silva', 'joao.silva@email.com', 1);

console.log(result.changes); // Número de linhas alteradas

// Com parâmetros nomeados
const stmt = db.prepare(\`
  UPDATE usuarios 
  SET nome = @nome, idade = @idade 
  WHERE id = @id
\`);

stmt.run({ id: 1, nome: 'João Updated', idade: 26 });

// Atualizar vários em transação
const atualizar = db.prepare('UPDATE usuarios SET ativo = ? WHERE id = ?');

const desativarVarios = db.transaction((ids) => {
  for (const id of ids) {
    atualizar.run(0, id);
  }
});

desativarVarios([1, 2, 3]);`
                    }
                ]
            },
            deletar: {
                title: 'Deletar Dados',
                subtitle: 'better-sqlite3',
                description: 'Remoção de registros.',
                examples: [
                    {
                        code: `// Deletar registro
const stmt = db.prepare('DELETE FROM usuarios WHERE id = ?');
const result = stmt.run(1);

console.log(result.changes); // Linhas deletadas

// Deletar com condição
db.prepare('DELETE FROM usuarios WHERE ativo = 0').run();

// Deletar todos
db.prepare('DELETE FROM usuarios').run();

// Deletar em transação
const deletar = db.prepare('DELETE FROM usuarios WHERE id = ?');

const deletarVarios = db.transaction((ids) => {
  for (const id of ids) {
    deletar.run(id);
  }
  return ids.length;
});

const deletados = deletarVarios([1, 2, 3]);
console.log(\`Deletados: \${deletados}\`);`
                    }
                ]
            },
            transacoes: {
                title: 'Transações',
                subtitle: 'better-sqlite3',
                description: 'Transações para operações atômicas.',
                info: {
                    title: 'Tipos de Transação',
                    items: [
                        '**deferred**: Padrão, lock quando necessário.',
                        '**immediate**: Lock imediato para escrita.',
                        '**exclusive**: Lock exclusivo total.'
                    ]
                },
                examples: [
                    {
                        code: `// Transação básica
const transferir = db.transaction((de, para, valor) => {
  db.prepare('UPDATE contas SET saldo = saldo - ? WHERE id = ?').run(valor, de);
  db.prepare('UPDATE contas SET saldo = saldo + ? WHERE id = ?').run(valor, para);
});

transferir(1, 2, 100); // Transfere 100 da conta 1 para 2

// Com tipo de transação
const inserirImediato = db.transaction((dados) => {
  // operações
}).immediate();

const inserirExclusivo = db.transaction((dados) => {
  // operações
}).exclusive();

// Transação com retorno
const criarUsuario = db.transaction((nome, email) => {
  const result = db.prepare('INSERT INTO usuarios (nome, email) VALUES (?, ?)').run(nome, email);
  return db.prepare('SELECT * FROM usuarios WHERE id = ?').get(result.lastInsertRowid);
});

const novoUsuario = criarUsuario('Novo', 'novo@email.com');
console.log(novoUsuario);

// Verificar se está em transação
console.log(db.inTransaction); // true/false`
                    }
                ]
            },
            agregacao: {
                title: 'Funções de Agregação',
                subtitle: 'better-sqlite3',
                description: 'COUNT, SUM, AVG, MIN, MAX e agrupamentos.',
                examples: [
                    {
                        code: `// Contar registros
const total = db.prepare('SELECT COUNT(*) as total FROM usuarios').get();
console.log(total.total);

// Usando pluck para valor direto
const count = db.prepare('SELECT COUNT(*) FROM usuarios').pluck().get();
console.log(count); // 42

// Soma
const soma = db.prepare('SELECT SUM(preco) as total FROM produtos').pluck().get();

// Média
const media = db.prepare('SELECT AVG(idade) FROM usuarios').pluck().get();

// Min e Max
const stats = db.prepare(\`
  SELECT 
    MIN(preco) as menor,
    MAX(preco) as maior,
    AVG(preco) as media
  FROM produtos
\`).get();

// Group By
const porCategoria = db.prepare(\`
  SELECT categoria, COUNT(*) as total 
  FROM produtos 
  GROUP BY categoria
\`).all();

// Having
const categoriasPopulares = db.prepare(\`
  SELECT categoria, COUNT(*) as total 
  FROM produtos 
  GROUP BY categoria 
  HAVING total > 5
\`).all();`
                    }
                ]
            },
            funcoes: {
                title: 'Funções Customizadas',
                subtitle: 'better-sqlite3',
                description: 'Criar funções SQL personalizadas.',
                examples: [
                    {
                        code: `// Função escalar simples
db.function('dobrar', (x) => x * 2);
const result = db.prepare('SELECT dobrar(10)').pluck().get();
console.log(result); // 20

// Função com múltiplos argumentos
db.function('soma', (a, b) => a + b);

// Função de agregação
db.aggregate('concatenar', {
  start: '',
  step: (acumulador, valor) => acumulador + valor + ', ',
  result: (acumulador) => acumulador.slice(0, -2)
});

const nomes = db.prepare('SELECT concatenar(nome) FROM usuarios').pluck().get();
console.log(nomes); // 'João, Maria, Ana'

// Função determinística (cacheable)
db.function('maiusculo', {
  deterministic: true
}, (texto) => texto.toUpperCase());

// Usar em queries
const usuarios = db.prepare(\`
  SELECT maiusculo(nome) as nome FROM usuarios
\`).all();`
                    }
                ]
            },
            pragma: {
                title: 'Configurações (PRAGMA)',
                subtitle: 'better-sqlite3',
                description: 'Configurações e otimizações do banco.',
                examples: [
                    {
                        code: `// WAL mode (melhor performance)
db.pragma('journal_mode = WAL');

// Verificar configuração
const mode = db.pragma('journal_mode', { simple: true });
console.log(mode); // 'wal'

// Configurações comuns
db.pragma('synchronous = NORMAL');  // Menos sync, mais rápido
db.pragma('cache_size = 10000');    // Cache maior
db.pragma('temp_store = MEMORY');   // Temp em memória

// Foreign keys (desativado por padrão!)
db.pragma('foreign_keys = ON');

// Verificar integridade
const check = db.pragma('integrity_check');
console.log(check); // [{ integrity_check: 'ok' }]

// Listar tabelas
const tabelas = db.prepare(\`
  SELECT name FROM sqlite_master WHERE type='table'
\`).pluck().all();

// Info da tabela
const colunas = db.pragma('table_info(usuarios)');
console.log(colunas);`
                    }
                ]
            },
            backup: {
                title: 'Backup e Utilitários',
                subtitle: 'better-sqlite3',
                description: 'Backup, export e funções utilitárias.',
                examples: [
                    {
                        code: `// Backup do banco
db.backup('backup.db')
  .then(() => console.log('Backup completo!'))
  .catch(err => console.error('Erro:', err));

// Backup com progresso
db.backup('backup.db', {
  progress({ totalPages, remainingPages }) {
    console.log(\`Progresso: \${((totalPages - remainingPages) / totalPages * 100).toFixed(1)}%\`);
    return 100; // Páginas por passo
  }
});

// Serializar para Buffer (in-memory backup)
const buffer = db.serialize();
// Salvar buffer em arquivo ou enviar

// Carregar de Buffer
const db2 = new Database(buffer);

// Verificar se banco está aberto
console.log(db.open); // true/false

// Verificar se é read-only
console.log(db.readonly); // true/false

// Verificar se está em memória
console.log(db.memory); // true/false

// Nome do arquivo
console.log(db.name); // 'meuBanco.db' ou ':memory:'`
                    }
                ]
            }
        }
    },
    tailwind: {
        name: 'Tailwind CSS',
        topics: {
            inicio: {
                title: 'Início Rápido',
                subtitle: 'Tailwind CSS',
                description: 'Tailwind CSS é um framework CSS utility-first para criar designs customizados rapidamente.',
                info: {
                    title: 'Informações Úteis & Usos',
                    items: [
                        '**Utility-first**: Classes utilitárias ao invés de componentes.',
                        '**Responsivo**: Prefixos como sm:, md:, lg:, xl:, 2xl:.',
                        '**Customizável**: Configure cores, fontes e espaçamentos.',
                        '**JIT**: Just-In-Time compilação para builds rápidos.'
                    ]
                },
                examples: [
                    {
                        code: `<!-- Instalação via npm -->
npm install -D tailwindcss
npx tailwindcss init

<!-- tailwind.config.js -->
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- CSS principal -->
@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- CDN (desenvolvimento) -->
<script src="https://cdn.tailwindcss.com"></script>`
                    }
                ]
            },
            layout: {
                title: 'Layout',
                subtitle: 'Tailwind CSS',
                description: 'Classes para container, display e posicionamento.',
                examples: [
                    {
                        code: `<!-- Container -->
<div class="container mx-auto px-4">

<!-- Display -->
<div class="block">Block</div>
<div class="inline-block">Inline Block</div>
<div class="hidden">Escondido</div>

<!-- Position -->
<div class="relative">
  <div class="absolute top-0 right-0">Canto superior direito</div>
  <div class="absolute bottom-0 left-0">Canto inferior esquerdo</div>
</div>

<!-- Fixed e Sticky -->
<nav class="fixed top-0 w-full">Nav fixa</nav>
<header class="sticky top-0">Header sticky</header>

<!-- Z-Index -->
<div class="z-10">z-10</div>
<div class="z-50">z-50</div>`
                    }
                ]
            },
            flexbox: {
                title: 'Flexbox',
                subtitle: 'Tailwind CSS',
                description: 'Classes para layouts flexíveis.',
                examples: [
                    {
                        code: `<!-- Flex Container -->
<div class="flex">Flex horizontal</div>
<div class="flex flex-col">Flex vertical</div>
<div class="inline-flex">Inline flex</div>

<!-- Direção -->
<div class="flex flex-row">Linha (padrão)</div>
<div class="flex flex-row-reverse">Linha reversa</div>
<div class="flex flex-col-reverse">Coluna reversa</div>

<!-- Justify Content -->
<div class="flex justify-start">Início</div>
<div class="flex justify-center">Centro</div>
<div class="flex justify-end">Fim</div>
<div class="flex justify-between">Entre</div>
<div class="flex justify-around">Ao redor</div>
<div class="flex justify-evenly">Uniforme</div>

<!-- Align Items -->
<div class="flex items-start">Topo</div>
<div class="flex items-center">Centro</div>
<div class="flex items-end">Base</div>
<div class="flex items-stretch">Esticar</div>

<!-- Gap -->
<div class="flex gap-4">Gap 1rem</div>
<div class="flex gap-x-2 gap-y-4">Gap X e Y</div>

<!-- Flex Items -->
<div class="flex-1">Cresce e encolhe</div>
<div class="flex-none">Não flex</div>
<div class="flex-grow">Só cresce</div>
<div class="flex-shrink-0">Não encolhe</div>`
                    }
                ]
            },
            grid: {
                title: 'Grid',
                subtitle: 'Tailwind CSS',
                description: 'Sistema de grid CSS nativo.',
                examples: [
                    {
                        code: `<!-- Grid Container -->
<div class="grid grid-cols-3">3 colunas</div>
<div class="grid grid-cols-4 gap-4">4 colunas com gap</div>
<div class="grid grid-cols-12">12 colunas (sistema)</div>

<!-- Colunas Responsivas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 coluna mobile, 2 tablet, 3 desktop -->
</div>

<!-- Grid Template -->
<div class="grid grid-cols-[200px_1fr_200px]">
  <!-- Sidebar - Conteúdo - Sidebar -->
</div>

<!-- Grid Rows -->
<div class="grid grid-rows-3">3 linhas</div>
<div class="grid grid-rows-[auto_1fr_auto]">Header-Content-Footer</div>

<!-- Span Colunas/Linhas -->
<div class="col-span-2">Ocupa 2 colunas</div>
<div class="col-span-full">Ocupa todas as colunas</div>
<div class="row-span-2">Ocupa 2 linhas</div>

<!-- Col/Row Start e End -->
<div class="col-start-2 col-end-4">Coluna 2-3</div>
<div class="row-start-1 row-end-3">Linha 1-2</div>`
                    }
                ]
            },
            spacing: {
                title: 'Espaçamento',
                subtitle: 'Tailwind CSS',
                description: 'Padding, margin e espaçamento.',
                info: {
                    title: 'Escala de Espaçamento',
                    items: [
                        '**0**: 0px | **1**: 0.25rem (4px)',
                        '**2**: 0.5rem (8px) | **4**: 1rem (16px)',
                        '**8**: 2rem (32px) | **16**: 4rem (64px)',
                        '**px**: 1px | **auto**: auto'
                    ]
                },
                examples: [
                    {
                        code: `<!-- Padding -->
<div class="p-4">Padding todos os lados</div>
<div class="px-4">Padding horizontal</div>
<div class="py-2">Padding vertical</div>
<div class="pt-4 pb-2 pl-6 pr-8">Padding individual</div>

<!-- Margin -->
<div class="m-4">Margin todos os lados</div>
<div class="mx-auto">Centralizar horizontalmente</div>
<div class="my-8">Margin vertical</div>
<div class="mt-4 mb-2">Margin top e bottom</div>
<div class="-mt-4">Margin negativa</div>

<!-- Space Between (em flex/grid) -->
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="flex flex-col space-y-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`
                    }
                ]
            },
            sizing: {
                title: 'Tamanho',
                subtitle: 'Tailwind CSS',
                description: 'Width, height e tamanhos.',
                examples: [
                    {
                        code: `<!-- Width -->
<div class="w-64">256px</div>
<div class="w-full">100%</div>
<div class="w-screen">100vw</div>
<div class="w-1/2">50%</div>
<div class="w-1/3">33.33%</div>
<div class="w-auto">Auto</div>
<div class="w-[350px]">Valor arbitrário</div>

<!-- Min/Max Width -->
<div class="min-w-0">Min width 0</div>
<div class="max-w-md">Max width 448px</div>
<div class="max-w-screen-xl">Max width 1280px</div>

<!-- Height -->
<div class="h-64">256px</div>
<div class="h-full">100%</div>
<div class="h-screen">100vh</div>
<div class="min-h-screen">Mínimo 100vh</div>
<div class="max-h-96">Máximo 384px</div>

<!-- Size (Width + Height) -->
<div class="size-10">40px x 40px</div>
<div class="size-full">100% x 100%</div>`
                    }
                ]
            },
            typography: {
                title: 'Tipografia',
                subtitle: 'Tailwind CSS',
                description: 'Fontes, tamanhos e estilização de texto.',
                examples: [
                    {
                        code: `<!-- Tamanho de Fonte -->
<p class="text-xs">Extra small (12px)</p>
<p class="text-sm">Small (14px)</p>
<p class="text-base">Base (16px)</p>
<p class="text-lg">Large (18px)</p>
<p class="text-xl">Extra large (20px)</p>
<p class="text-2xl">2XL (24px)</p>
<p class="text-4xl">4XL (36px)</p>

<!-- Peso da Fonte -->
<p class="font-thin">Thin (100)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>

<!-- Família da Fonte -->
<p class="font-sans">Sans-serif</p>
<p class="font-serif">Serif</p>
<p class="font-mono">Monospace</p>

<!-- Estilo e Decoração -->
<p class="italic">Itálico</p>
<p class="underline">Sublinhado</p>
<p class="line-through">Riscado</p>
<p class="uppercase">Maiúsculas</p>
<p class="lowercase">Minúsculas</p>
<p class="capitalize">Capitalizado</p>

<!-- Alinhamento -->
<p class="text-left">Esquerda</p>
<p class="text-center">Centro</p>
<p class="text-right">Direita</p>
<p class="text-justify">Justificado</p>

<!-- Line Height -->
<p class="leading-none">1</p>
<p class="leading-normal">1.5</p>
<p class="leading-loose">2</p>`
                    }
                ]
            },
            colors: {
                title: 'Cores',
                subtitle: 'Tailwind CSS',
                description: 'Sistema de cores e backgrounds.',
                examples: [
                    {
                        code: `<!-- Cores de Texto -->
<p class="text-black">Preto</p>
<p class="text-white">Branco</p>
<p class="text-gray-500">Cinza 500</p>
<p class="text-red-600">Vermelho 600</p>
<p class="text-blue-500">Azul 500</p>
<p class="text-green-400">Verde 400</p>
<p class="text-[#baf467]">Cor customizada</p>

<!-- Background -->
<div class="bg-white">Fundo branco</div>
<div class="bg-gray-100">Fundo cinza claro</div>
<div class="bg-blue-500">Fundo azul</div>
<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  Gradiente
</div>

<!-- Opacidade -->
<div class="bg-black/50">50% opacidade</div>
<div class="bg-blue-500/75">75% opacidade</div>
<p class="text-gray-500/80">Texto 80%</p>

<!-- Cores na Escala (50-950) -->
<!-- slate, gray, zinc, neutral, stone -->
<!-- red, orange, amber, yellow, lime -->
<!-- green, emerald, teal, cyan, sky -->
<!-- blue, indigo, violet, purple, fuchsia -->
<!-- pink, rose -->`
                    }
                ]
            },
            borders: {
                title: 'Bordas',
                subtitle: 'Tailwind CSS',
                description: 'Bordas, arredondamento e divisórias.',
                examples: [
                    {
                        code: `<!-- Border Width -->
<div class="border">1px</div>
<div class="border-2">2px</div>
<div class="border-4">4px</div>
<div class="border-t-2">Top 2px</div>
<div class="border-x-2">Left e Right 2px</div>

<!-- Border Color -->
<div class="border border-gray-300">Cinza</div>
<div class="border-2 border-blue-500">Azul</div>
<div class="border border-red-500/50">Vermelho 50%</div>

<!-- Border Style -->
<div class="border-solid">Sólida</div>
<div class="border-dashed">Tracejada</div>
<div class="border-dotted">Pontilhada</div>
<div class="border-none">Sem borda</div>

<!-- Border Radius -->
<div class="rounded">0.25rem</div>
<div class="rounded-md">0.375rem</div>
<div class="rounded-lg">0.5rem</div>
<div class="rounded-xl">0.75rem</div>
<div class="rounded-2xl">1rem</div>
<div class="rounded-full">9999px (círculo)</div>
<div class="rounded-t-lg">Só topo</div>
<div class="rounded-none">Sem radius</div>

<!-- Divide (entre elementos filhos) -->
<div class="divide-y divide-gray-200">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`
                    }
                ]
            },
            effects: {
                title: 'Efeitos',
                subtitle: 'Tailwind CSS',
                description: 'Sombras, opacidade e filtros.',
                examples: [
                    {
                        code: `<!-- Box Shadow -->
<div class="shadow-sm">Sombra pequena</div>
<div class="shadow">Sombra padrão</div>
<div class="shadow-md">Sombra média</div>
<div class="shadow-lg">Sombra grande</div>
<div class="shadow-xl">Sombra XL</div>
<div class="shadow-2xl">Sombra 2XL</div>
<div class="shadow-none">Sem sombra</div>
<div class="shadow-inner">Sombra interna</div>

<!-- Opacidade -->
<div class="opacity-100">100%</div>
<div class="opacity-75">75%</div>
<div class="opacity-50">50%</div>
<div class="opacity-25">25%</div>
<div class="opacity-0">0%</div>

<!-- Blur -->
<div class="blur-sm">Blur pequeno</div>
<div class="blur">Blur padrão</div>
<div class="blur-lg">Blur grande</div>
<div class="backdrop-blur-sm">Backdrop blur</div>

<!-- Outros Filtros -->
<img class="grayscale">Preto e branco</img>
<img class="brightness-150">Mais brilho</img>
<img class="contrast-125">Mais contraste</img>
<img class="saturate-200">Mais saturação</img>`
                    }
                ]
            },
            transitions: {
                title: 'Transições e Animações',
                subtitle: 'Tailwind CSS',
                description: 'Transições CSS e animações.',
                examples: [
                    {
                        code: `<!-- Transições -->
<button class="transition">Todas as propriedades</button>
<button class="transition-colors">Só cores</button>
<button class="transition-opacity">Só opacidade</button>
<button class="transition-transform">Só transform</button>
<button class="transition-all">Todas</button>

<!-- Duração -->
<div class="transition duration-75">75ms</div>
<div class="transition duration-150">150ms</div>
<div class="transition duration-300">300ms</div>
<div class="transition duration-500">500ms</div>

<!-- Timing Function -->
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>

<!-- Animações -->
<div class="animate-spin">Girando</div>
<div class="animate-ping">Ping</div>
<div class="animate-pulse">Pulso</div>
<div class="animate-bounce">Quicando</div>

<!-- Exemplo completo -->
<button class="
  bg-blue-500 hover:bg-blue-600
  transition-colors duration-300 ease-in-out
">
  Hover me
</button>`
                    }
                ]
            },
            responsive: {
                title: 'Responsivo',
                subtitle: 'Tailwind CSS',
                description: 'Design responsivo com breakpoints.',
                info: {
                    title: 'Breakpoints Padrão',
                    items: [
                        '**sm**: 640px | **md**: 768px',
                        '**lg**: 1024px | **xl**: 1280px',
                        '**2xl**: 1536px',
                        'Mobile-first: sem prefixo = todos os tamanhos'
                    ]
                },
                examples: [
                    {
                        code: `<!-- Mobile First -->
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- 100% mobile, 50% tablet, 33% desktop -->
</div>

<!-- Grid Responsivo -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Texto Responsivo -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Título Responsivo
</h1>

<!-- Ocultar/Mostrar -->
<div class="hidden md:block">Só tablet+</div>
<div class="block md:hidden">Só mobile</div>
<div class="hidden lg:flex">Flex só em desktop</div>

<!-- Espaçamento Responsivo -->
<div class="p-4 md:p-8 lg:p-12">
  Padding responsivo
</div>

<!-- Layout Responsivo Completo -->
<nav class="flex flex-col md:flex-row md:justify-between">
  <div>Logo</div>
  <div class="flex flex-col md:flex-row gap-4">
    <a>Link 1</a>
    <a>Link 2</a>
  </div>
</nav>`
                    }
                ]
            },
            states: {
                title: 'Estados',
                subtitle: 'Tailwind CSS',
                description: 'Hover, focus, active e outros estados.',
                examples: [
                    {
                        code: `<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-700">
  Hover
</button>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:ring-2">

<!-- Active -->
<button class="bg-blue-500 active:bg-blue-800">
  Active
</button>

<!-- Group Hover -->
<div class="group">
  <h3 class="group-hover:text-blue-500">Título</h3>
  <p class="group-hover:text-gray-600">Descrição</p>
</div>

<!-- Disabled -->
<button class="disabled:opacity-50 disabled:cursor-not-allowed">
  Disabled
</button>

<!-- First/Last Child -->
<div>
  <p class="first:mt-0 last:mb-0">Item</p>
</div>

<!-- Odd/Even -->
<tr class="odd:bg-gray-100 even:bg-white">

<!-- Dark Mode -->
<div class="bg-white dark:bg-gray-800">
  <p class="text-black dark:text-white">Texto</p>
</div>

<!-- Combinação de Estados -->
<button class="
  hover:bg-blue-600
  focus:ring-2 focus:ring-blue-300
  active:bg-blue-700
  disabled:opacity-50
">
  Botão Completo
</button>`
                    }
                ]
            },
            components: {
                title: 'Componentes',
                subtitle: 'Tailwind CSS',
                description: 'Exemplos de componentes comuns.',
                examples: [
                    {
                        code: `<!-- Botão -->
<button class="
  px-4 py-2 
  bg-blue-500 hover:bg-blue-600 
  text-white font-medium 
  rounded-lg 
  transition-colors
">
  Botão Primário
</button>

<!-- Card -->
<div class="
  bg-white rounded-xl shadow-lg 
  overflow-hidden
">
  <img class="w-full h-48 object-cover" src="...">
  <div class="p-6">
    <h3 class="text-xl font-bold">Título</h3>
    <p class="text-gray-600 mt-2">Descrição</p>
  </div>
</div>

<!-- Input -->
<input class="
  w-full px-4 py-2 
  border border-gray-300 rounded-lg
  focus:outline-none focus:ring-2 focus:ring-blue-500
" placeholder="Digite...">

<!-- Badge -->
<span class="
  px-2 py-1 
  text-xs font-medium 
  bg-green-100 text-green-800 
  rounded-full
">
  Ativo
</span>

<!-- Alert -->
<div class="
  p-4 
  bg-yellow-100 border-l-4 border-yellow-500 
  text-yellow-700
">
  <p class="font-bold">Atenção!</p>
  <p>Mensagem de alerta aqui.</p>
</div>

<!-- Avatar -->
<img class="
  w-12 h-12 
  rounded-full 
  ring-2 ring-white
" src="avatar.jpg">`
                    }
                ]
            }
        }
    }
};

// Estado atual
let currentLang = 'javascript';
let currentTopic = 'variaveis';

// Definição das seções
const sidebarSections = [
    {
        id: 'linguagens',
        title: 'Linguagens',
        items: [
            { key: 'javascript', name: 'JavaScript' },
            { key: 'python', name: 'Python' },
            { key: 'csharp', name: 'C#' },
            { key: 'cpp', name: 'C++' },
            { key: 'lua', name: 'Lua' },
            { key: 'gml', name: 'GML' }
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        items: [
            { key: 'expressjs', name: 'Express.js' },
            { key: 'docker', name: 'Docker' },
            { key: 'sqlite', name: 'SQLite' },
            { key: 'postgresql', name: 'PostgreSQL' },
            { key: 'mysql', name: 'MySQL' }
        ]
    },
    {
        id: 'frontend',
        title: 'Front-end',
        items: [
            { key: 'tailwind', name: 'Tailwind CSS' }
        ]
    },
    {
        id: 'uteis',
        title: 'Úteis',
        items: [
            { key: 'github', name: 'GitHub' },
            { key: 'bettersqlite3', name: 'better-sqlite3' }
        ]
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
    loadTopicContent(currentLang, currentTopic);
});

// Construir sidebar com seções e linguagens
function buildSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    
    let isFirst = true;
    
    sidebarSections.forEach(section => {
        // Criar container da seção
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'sidebar-section';
        
        // Header da seção
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.textContent = section.title;
        sectionContainer.appendChild(sectionHeader);
        
        // Itens da seção (linguagens/frameworks)
        section.items.forEach(lang => {
            const langContainer = document.createElement('div');
            langContainer.className = 'lang-container';
            langContainer.dataset.lang = lang.key;
            
            // Botão da linguagem
            const langButton = document.createElement('button');
            langButton.className = 'lang-button';
            langButton.dataset.lang = lang.key;
            
            if (isFirst) {
                langButton.classList.add('active');
            }
            
            langButton.innerHTML = `
                <span>${lang.name}</span>
                <span class="lang-arrow">▼</span>
            `;
            
            // Lista de tópicos
            const topicsList = document.createElement('div');
            topicsList.className = 'topics-list';
            
            if (isFirst) {
                topicsList.classList.add('expanded');
            }
            
            const topics = languageData[lang.key].topics;
            Object.keys(topics).forEach((topicKey, topicIndex) => {
                const topic = topics[topicKey];
                const topicItem = document.createElement('div');
                topicItem.className = 'topic-item';
                topicItem.textContent = topic.title;
                topicItem.dataset.lang = lang.key;
                topicItem.dataset.topic = topicKey;
                
                if (isFirst && topicIndex === 0) {
                    topicItem.classList.add('active');
                }
                
                topicItem.addEventListener('click', () => {
                // Remover active de todos os tópicos
                document.querySelectorAll('.topic-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Adicionar active ao tópico clicado
                topicItem.classList.add('active');
                
                // Carregar conteúdo
                currentLang = lang.key;
                currentTopic = topicKey;
                loadTopicContent(currentLang, currentTopic);
            });
            
            topicsList.appendChild(topicItem);
        });
        
        // Evento de clique no botão de linguagem
        langButton.addEventListener('click', () => {
            const wasActive = langButton.classList.contains('active');
            
            // Fechar todas as linguagens
            document.querySelectorAll('.lang-button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelectorAll('.topics-list').forEach(list => {
                list.classList.remove('expanded');
            });
            
            // Se não estava ativa, abrir esta
            if (!wasActive) {
                langButton.classList.add('active');
                topicsList.classList.add('expanded');
                
                // Carregar primeiro tópico desta linguagem
                const firstTopic = Object.keys(languageData[lang.key].topics)[0];
                currentLang = lang.key;
                currentTopic = firstTopic;
                
                // Remover active de todos os tópicos e adicionar ao primeiro desta linguagem
                document.querySelectorAll('.topic-item').forEach(item => {
                    item.classList.remove('active');
                });
                topicsList.querySelector('.topic-item').classList.add('active');
                
                loadTopicContent(currentLang, currentTopic);
            }
        });
        
            langContainer.appendChild(langButton);
            langContainer.appendChild(topicsList);
            sectionContainer.appendChild(langContainer);
            
            isFirst = false;
        });
        
        sidebar.appendChild(sectionContainer);
    });
}

// Carregar conteúdo do tópico
function loadTopicContent(lang, topicKey) {
    const topicContent = document.getElementById('topicContent');
    const topic = languageData[lang].topics[topicKey];
    
    let html = `
        <h2>${topic.title}</h2>
        <h3>${topic.subtitle}</h3>
        <p>${topic.description}</p>
    `;
    
    // Adicionar info box se existir
    if (topic.info) {
        html += `
            <div class="info-box">
                <h4>${topic.info.title}</h4>
                <ul>
                    ${topic.info.items.map(item => `<li>${formatBoldText(item)}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Adicionar exemplos de código
    if (topic.examples) {
        topic.examples.forEach((example, index) => {
            html += `
                <div class="code-example">
                    <button class="copy-button" onclick="copyCode(this)">Copiar</button>
                    <pre><code>${escapeHtml(example.code)}</code></pre>
                </div>
            `;
        });
    }
    
    topicContent.innerHTML = html;
}

// Formatar texto com negrito (**texto**)
function formatBoldText(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Copiar código
function copyCode(button) {
    const codeBlock = button.parentElement.querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}
