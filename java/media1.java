import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class media1 {

    public static void main(String[] args) throws IOException {
        try (Scanner input = new Scanner(System.in)){

            double notaA = input.nextDouble();
            double notaB = input.nextDouble();

            double media = (((notaA*3.5)+(notaB*7.5))/11);
            System.out.printf("MEDIA = %.5f%n", media);
        }
    }
    
}
