ppackage com.college.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.college.admission.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
}
