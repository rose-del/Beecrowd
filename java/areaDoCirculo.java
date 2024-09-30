import java.io.IOException;
import java.util.Scanner;

//Para submeter ao beecrowd a classe deve ser "Main" para que a sua solução seja executada
public class areaDoCirculo {

    public static void main(String[] args) throws IOException{
        try (Scanner input = new Scanner(System.in)){

            double raio = input.nextDouble();
            double pi = 3.14159;

            double area = pi * Math.pow(raio, 2);
            System.out.printf("A=%.4f%n", area);
        }
    }
    
}
