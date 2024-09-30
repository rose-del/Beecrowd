import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class ExtremamenteBasico {
    
    public static void main(String[] args) throws IOException {
        try (Scanner ler = new Scanner(System.in)) {  // Try-with-resources
            int valorA = ler.nextInt();
            int valorB = ler.nextInt();

            int soma = valorA + valorB;
            System.out.println("X = " + soma);
        }
    }
}

