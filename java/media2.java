import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class media2 {

    public static void main(String[] args) throws IOException {
        try (Scanner input = new Scanner(System.in)){

            double notaA = input.nextDouble();
            double notaB = input.nextDouble();
            double notaC = input.nextDouble();

            double media = (((notaA*2)+(notaB*3)+(notaC*5))/10);
            System.out.printf("MEDIA = %.1f%n", media);
        }
    }
    
}
