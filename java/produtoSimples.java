import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class produtoSimples {
    
    public static void main(String[] args) throws IOException {
        try (Scanner input = new Scanner(System.in)){

            int numA = input.nextInt();
            int numB = input.nextInt();

            int prod = numA*numB;
            System.out.println("PROD = "+prod);
        }
        
    }
}
