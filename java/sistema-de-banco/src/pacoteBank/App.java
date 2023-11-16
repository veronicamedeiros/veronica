package pacoteBank;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


//Criar uma conta
//Conta com agência, nome
//Limitar o nome do usuário para 12 caracteres
//sacar valores (não pode sacar mais que o saldo)
//pode depositar valores
//infromar para o usuário as operações

public class App {
    public static void main(String[] args) {
        System.out.println("Sistema bancário");
        List<Client> clientes = new ArrayList<>();
        boolean operando = true;
        Scanner scanner = new Scanner(System.in);


        System.out.println("Já possui conta? Insira seu número de cadastro; caso não possua, digite 0");
        int indice = scanner.nextInt();
        indice = indice - 1;

        funcoes.menu();

        int opcao = scanner.nextInt();

        while (operando){

            while(opcao == 1){
                System.out.println("CADASTRO");
                System.out.println("Complete os dados abaixo para realizar o cadastro:");

                Client apoio = new Client();
                System.out.println("insira o nome: ");
                Scanner scannerCadastro = new Scanner(System.in);
                String nome = scannerCadastro.nextLine();
                while (nome.length() > 13){
                    System.out.println("O campo 'name' deve conter até 12 caractéres.");
                    nome = scannerCadastro.nextLine();
                }
                apoio.setName(nome);


                System.out.println("Digite a agência: ");
                int agencia = scannerCadastro.nextInt();
                apoio.setAgencia(agencia);
                System.out.println("Digite a conta: ");
                int conta = scannerCadastro.nextInt();
                apoio.setConta(conta);
                System.out.println(apoio.getConta());

                apoio.setNumeroDeCadastro();
                indice = apoio.getNumeroDeCadastro();
                indice = indice - 1;

                System.out.println("Digite o saldo inicial: ");
                int inicial = scanner.nextInt();
                apoio.saldoIncial(inicial);
                System.out.println("Saldo inicial de: " + inicial);

                clientes.add(apoio);

                System.out.println(" ");
                System.out.println("Sua conta for criada com sucesso, seu número de cadastro é: " + (indice + 1));

                funcoes.menu();
                opcao = scanner.nextInt();
            }

            while(opcao == 2){
                System.out.println("SAQUE");
                System.out.println("Digite o valor que deseja sacar: ");
                int saque = scanner.nextInt();

                if (saque < clientes.get(indice).mostrarSaldo()){
                    clientes.get(indice).fazerSaque(saque);
                    System.out.println("Foi sacado o valor de " + saque);
                    System.out.println("Saldo atual: " + clientes.get(indice).mostrarSaldo());
                    funcoes.menu();
                    opcao = scanner.nextInt();

                }else{
                    System.out.println("Não há saldo suficiente. Digite outro valor: ");
                }
            }

            while (opcao == 3){
                System.out.println("DEPOSITO");

                System.out.println("Digite a quantia do deposito");
                int deposito = scanner.nextInt();
                clientes.get(indice).fazerDeposito(deposito);
                System.out.println("quantia depositada: " + deposito);
                System.out.println("saldo atual: " + clientes.get(indice).mostrarSaldo());

                funcoes.menu();
                opcao = scanner.nextInt();
            }

            if (opcao == 4){
                System.out.println("Saldo atual:" + clientes.get(indice).mostrarSaldo());

                funcoes.menu();
                opcao = scanner.nextInt();
            }

            if (opcao == 5){
                System.out.println(clientes.get(indice).toString());

                funcoes.menu();
                opcao = scanner.nextInt();
            }

            if (opcao == 6){
                operando = false;
                System.out.println("Sessão encerrada");
            }
        }

        /*for (Client item: clientes){
            System.out.println(item.getName());
        }*/

    }
}

