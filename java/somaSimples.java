import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class somaSimples {

    public static void main(String[] args) throws IOException{
        try (Scanner input = new Scanner(System.in)){

            int valorA = input.nextInt();
            int valorB = input.nextInt();

            int soma = valorA + valorB;
            System.out.println("SOMA = "+soma);
            System.out.println();
        }
    }
    
}
